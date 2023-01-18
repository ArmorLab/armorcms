build:
	cp .env.example .env
	docker compose build
	docker compose up -d --remove-orphans
	docker exec -u www armorcms_php composer install
	docker exec -u www armorcms_php php bin/console regenerate-app-secret
	docker exec -u www armorcms_php php bin/console doctrine:migrations:migrate
	docker exec -u www armorcms_php php bin/console doctrine:fixtures:load --no-interaction
start:
	docker compose up -d --remove-orphans
stop:
	docker compose down
php:
	docker exec -u www armorcms_php $(cmd)
static-analysis:
	docker exec -u www armorcms_php vendor/bin/phpinsights analyse
composer:
	docker exec -u www armorcms_php composer install
migrate:
	docker exec -u www armorcms_php php bin/console doctrine:migrations:migrate
migration:
	docker exec -u www armorcms_php php bin/console doctrine:migrations:diff