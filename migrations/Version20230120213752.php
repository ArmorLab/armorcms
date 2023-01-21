<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

final class Version20230120213752 extends AbstractMigration
{
    public function getDescription(): string
    {
        return 'Add relation between menu and menu item.';
    }

    public function up(Schema $schema): void
    {
        $this->addSql('ALTER TABLE menu_item ADD menu_id INT DEFAULT NULL');
        $this->addSql(
            'ALTER TABLE menu_item 
                ADD CONSTRAINT FK_D754D550CCD7E912 
                FOREIGN KEY (menu_id) REFERENCES menu (id)'
        );
        $this->addSql('CREATE INDEX IDX_D754D550CCD7E912 ON menu_item (menu_id)');
    }

    public function down(Schema $schema): void
    {
        $this->addSql('ALTER TABLE menu_item DROP FOREIGN KEY FK_D754D550CCD7E912');
        $this->addSql('DROP INDEX IDX_D754D550CCD7E912 ON menu_item');
        $this->addSql('ALTER TABLE menu_item DROP menu_id');
    }
}
