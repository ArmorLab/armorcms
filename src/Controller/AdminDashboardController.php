<?php

declare(strict_types=1);

namespace Armorcms\Controller;

use Armorcms\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

final class AdminDashboardController extends AbstractController
{
    private const LAST_LOGIN_USERS_NUMBER = 5;

    public function __construct(
        private UserRepository $userRepository
    ) {
    }

    #[Route('/admin', name: 'admin_dashboard')]
    public function index(): Response
    {
        return $this->render(
            'admin/dashboard.html.twig',
            [
                'lastLoggedUsers' => $this->userRepository->getLastLoggedUsers(self::LAST_LOGIN_USERS_NUMBER),
            ]
        );
    }
}
