<?php

declare(strict_types=1);

namespace Armorcms\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class AdminDashboardController extends AbstractController
{
    #[Route('/admin', name: 'admin_dashboard')]
    public function index(): Response
    {
        return $this->render(
            'admin/index.html.twig',
            [
                'controller_name' => 'AdminDashboardController',
            ]
        );
    }
}
