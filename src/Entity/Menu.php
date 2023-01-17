<?php

namespace Armorcms\Entity;

use Armorcms\Repository\MenuRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MenuRepository::class)]
class Menu
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    private function __construct(
        #[ORM\Column(type:"string", length:128)]
        private string $name,
        #[ORM\Column(type:"string", length:128)]
        private string $title,
        #[ORM\Column(type:"boolean")]
        private bool $isVisible
    ) {
    }

    public static function create(
        string $name,
        string $title,
        bool $isVisible
    ): self {
        return new self($name, $title, $isVisible);
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): string
    {
        return $this->name;
    }

    public function getTitle(): string
    {
        return $this->title;
    }

    public function isVisible(): bool
    {
        return $this->isVisible;
    }
}
