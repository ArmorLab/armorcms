<?php

declare(strict_types=1);

namespace Armorcms\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class HomepageController extends AbstractController
{
    #[Route('/', name: 'homepage')]
    public function index(): Response
    {
        return $this->render(
            'homepage/index.html.twig',
            [
                'controller_name' => 'HomepageController',
            ]
        );
    }
}
