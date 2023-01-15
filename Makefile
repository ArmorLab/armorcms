build:
	cp .env.example .env
	docker compose build
	docker compose up -d --remove-orphans
	docker exec armorcms_php composer install
	docker exec armorcms_php php bin/console regenerate-app-secret
	docker exec armorcms_php php bin/console doctrine:migrations:migrate
	docker exec armorcms_php php bin/console doctrine:fixtures:load --no-interaction
start:
	docker compose up -d --remove-orphans
php:
	docker exec armorcms_php $(cmd)
static-analysis:
	docker exec armorcms_php vendor/bin/phpinsights analyse
composer:
	docker exec armorcms_php composer install
migrate:
	docker exec armorcms_php php bin/console doctrine:migrations:migrate
