<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230118040857 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add menu and menu items tables.';
    }

    public function up(Schema $schema): void
    {
        $this->addSql(
            'CREATE TABLE menu (
                id INT AUTO_INCREMENT NOT NULL,
                name VARCHAR(128) NOT NULL,
                title VARCHAR(128) NOT NULL,
                is_visible TINYINT(1) NOT NULL,
                PRIMARY KEY(id)) 
                DEFAULT CHARACTER SET utf8mb4 
                COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB'
        );
        $this->addSql(
            'CREATE TABLE menu_item (
                id INT AUTO_INCREMENT NOT NULL,
                PRIMARY KEY(id)) 
                DEFAULT CHARACTER SET utf8mb4 
                COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB'
        );
        $this->addSql('ALTER TABLE user CHANGE email email VARCHAR(128) NOT NULL');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('DROP TABLE menu');
        $this->addSql('DROP TABLE menu_item');
        $this->addSql('ALTER TABLE user CHANGE email email VARCHAR(180) NOT NULL');
    }
}
