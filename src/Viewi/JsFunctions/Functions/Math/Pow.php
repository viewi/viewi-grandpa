<?php

    namespace Viewi\JsFunctions\Functions\Math;

    use Viewi\JsFunctions\BaseFunctionConverter;
    use Viewi\JsTranslator;

    class Pow extends BaseFunctionConverter
    {
        public static string $name = 'pow';
    
        public static function convert(
            JsTranslator $translator,
            string $code,
            string $identation
        ): string {
            $jsToInclue = __DIR__ . DIRECTORY_SEPARATOR . 'Pow.js';
            $translator->includeJsFile(self::$name, $jsToInclue);
            return $code . '(';
        }
    }
