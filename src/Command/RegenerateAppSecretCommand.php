<?php

declare(strict_types=1);

namespace Armorcms\Command;

use Exception;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

final class RegenerateAppSecretCommand extends Command
{
    /**
     * @var string
     */
    protected static $defaultName = 'regenerate-app-secret';

    /**
     * @throws Exception
     */
    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $a = '0123456789abcdef';
        $secret = '';
        for ($i = 0; $i < 32; $i++) {
            $secret .= $a[random_int(0, 15)];
        }

        shell_exec('sed -i -E "s/^APP_SECRET=$/APP_SECRET=' . $secret . '/" .env');
        $io->success('New APP_SECRET was generated: ' . $secret);

        return self::SUCCESS;
    }
}
