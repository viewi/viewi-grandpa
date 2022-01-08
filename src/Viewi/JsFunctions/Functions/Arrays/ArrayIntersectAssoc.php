<?php

namespace Viewi\JsFunctions\Functions\Arrays;

use Viewi\JsFunctions\BaseFunctionConverter;
use Viewi\JsTranslator;

class ArrayIntersectAssoc extends BaseFunctionConverter
{
    public static string $name = 'array_intersect_assoc';

    public static function convert(
        JsTranslator $translator,
        string $code,
        string $indentation
    ): string {
        $jsToInclude = __DIR__ . DIRECTORY_SEPARATOR . 'ArrayIntersectAssoc.js';
        $translator->includeJsFile(self::$name, $jsToInclude);
        return $code . '(';
    }
}
