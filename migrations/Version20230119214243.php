<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230119214243 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add menu item table.';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE menu_item ADD name VARCHAR(128) NOT NULL, ADD link VARCHAR(256) NOT NULL, ADD target VARCHAR(256) NOT NULL, ADD status VARCHAR(128) NOT NULL, ADD priority INT NOT NULL, ADD path_type VARCHAR(128) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE menu_item DROP name, DROP link, DROP target, DROP status, DROP priority, DROP path_type');
    }
}
