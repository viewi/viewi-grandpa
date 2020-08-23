<?php

namespace Vo;

abstract class BaseFunctionConverter
{
    public static bool $directive = false;
    public static string $name = '__FUNCTION_NAME__';
    public abstract static function Convert(
        JsTranslator $translator,
        string $code,
        string $identation
    ): string;
}