<?php

use Vo\PageEngine;
use Vo\BaseComponent;

function RenderLayout(
    \Layout $component,
    PageEngine $pageEngine,
    array $slots
    , ...$scope
) {
    $slotContents = [];
    
    $_content = '';

    $_content .= '<!DOCTYPE html>
<html>

<head>
    ';
    $slotContents[0] = 'Layout_Slot6';
    $_content .= $pageEngine->renderComponent($slots['head'] ? $slots['head'] : 'Layout_Slot6', $component, $slotContents, [], ...$scope);
    $slotContents = [];
    $_content .= '
    <style>
        body {
            background-color: rgb(80, 62, 62);
            color: rgb(104, 199, 202);
        }

        button {
            border: none;
            padding: 6px 12px;
            background-color: antiquewhite;
            color: brown;
            border-radius: 4px;
            outline: none;
        }

        button:hover {
            background-color: rgb(252, 243, 232);
            cursor: pointer;
        }

        button:active {
            background-color: rgb(252, 228, 197);
        }
    </style>
</head>

<body>
    ';
    $_content .= $pageEngine->renderComponent($slots['body'], $component, [], []); 
    $_content .= '
</body>

</html>';
    return $_content;
   
}
