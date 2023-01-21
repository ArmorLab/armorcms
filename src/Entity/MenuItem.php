<?php

declare(strict_types=1);

namespace Armorcms\Entity;

use Armorcms\Repository\MenuItemRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MenuItemRepository::class)]
final class MenuItem
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\ManyToOne(targetEntity: Menu::class, inversedBy: 'menuItems')]
    private Menu $menu;

    public function __construct(
        #[ORM\Column(type:'string', length:128)]
        private string $name,
        #[ORM\Column(type:'string', length:256)]
        private string $link,
        #[ORM\Column(type:'string', length:256)]
        private string $target,
        #[ORM\Column(type:'string', length:128)]
        private string $status,
        #[ORM\Column(type:'integer')]
        private string $priority,
        #[ORM\Column(type:'string', length:128)]
        private string $pathType,
    ) {
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getLink(): string
    {
        return $this->link;
    }

    public function getTarget(): string
    {
        return $this->target;
    }

    public function getStatus(): string
    {
        return $this->status;
    }

    public function getPriority(): string
    {
        return $this->priority;
    }

    public function getPathType(): string
    {
        return $this->pathType;
    }

    public function getMenu(): Menu
    {
        return $this->menu;
    }

    public function setMenu(Menu $menu): void
    {
        $this->menu = $menu;
    }
}
