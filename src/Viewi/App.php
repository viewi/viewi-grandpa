<?php

namespace Viewi;

use InvalidArgumentException;
use Viewi\DI\IContainer;
use Viewi\Routing\Router;
use Viewi\WebComponents\Response;

class App
{
    public static array $config;

    public static ?array $publicConfig = null;

    public static function init(AppInit $init): void
    {
        $initConfig = $init->getConfig();

        // Validate provided config

        // Source directory
        if (!array_key_exists(PageEngine::SOURCE_DIR, $initConfig)) {
            throw new InvalidArgumentException('Source directory is required, none provided.');
        }

        // Server build directory
        if (!array_key_exists(PageEngine::SERVER_BUILD_DIR, $initConfig)) {
            throw new InvalidArgumentException('Server build directory is required, none provided.');
        }

        // Public root directory
        if (!array_key_exists(PageEngine::PUBLIC_ROOT_DIR, $initConfig)) {
            throw new InvalidArgumentException('Public root directory is required, none provided.');
        }

        $initConfig[PageEngine::PUBLIC_BUILD_DIR] ??= '/viewi-build';
        self::$publicConfig = $initConfig['__public_config'];

        // Remove no longer needed public config
        unset($initConfig['__public_config']);

        self::$config = $initConfig;
    }

    public static function use(string $packageClass)
    {
        if (!isset(self::$config[PageEngine::INCLUDES])) {
            self::$config[PageEngine::INCLUDES] = [];
        }
        self::$config[PageEngine::INCLUDES][] = $packageClass;
    }

    public static function run(string $component, array $params, ?IContainer $container = null)
    {
        return self::getEngine()->render($component, $params, $container);
    }

    public static function getEngine(): PageEngine
    {
        return new PageEngine(self::$config, self::$publicConfig);
    }

    public static function handle(?string $url = null, string $method = null): void
    {
        $url ??= $_SERVER['REDIRECT_URL'] ?? preg_replace('/\?.*/', '', $_SERVER['REQUEST_URI']);
        $method ??= $_SERVER['REQUEST_METHOD'];
        $response = Router::handle($url, $method, $_REQUEST);
        if (is_string($response)) { // html
            header("Content-type: text/html; charset=utf-8");
            echo $response;
        } else if ($response instanceof Response) {
            http_response_code($response->StatusCode);
            foreach ($response->Headers as $name => $value) {
                header("$name: $value");
            }
            if ($response->Stringify) {
                echo json_encode($response->Content);
            } else {
                echo $response->Content;
            }
        } else { // json
            header("Content-type: application/json; charset=utf-8");
            echo json_encode($response);
        }
    }
}
