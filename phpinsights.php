<?php

declare(strict_types=1);

use NunoMaduro\PhpInsights\Domain\Sniffs\ForbiddenSetterSniff;
use PHP_CodeSniffer\Standards\Generic\Sniffs\Files\LineLengthSniff;
use SlevomatCodingStandard\Sniffs\Commenting\DocCommentSpacingSniff;

return [
    'preset' => 'symfony',
    'ide' => 'phpstorm',
    'remove' => [
        ForbiddenSetterSniff::class,
        DocCommentSpacingSniff::class,
    ],
    'config' => [
        LineLengthSniff::class => [
            'lineLimit' => 120,
            'absoluteLineLimit' => 150,
            'ignoreComments' => false,
        ],
    ],
    'requirements' => [
        'min-quality' => 90,
        'min-complexity' => 85,
        'min-architecture' => 90,
        'min-style' => 90,
    ],
    'threads' => null,
];
