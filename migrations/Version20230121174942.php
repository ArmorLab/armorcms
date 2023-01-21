<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230121174942 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add last login date for user.';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE user ADD last_login_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:date_immutable)\'');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE user DROP last_login_at');
    }
}
