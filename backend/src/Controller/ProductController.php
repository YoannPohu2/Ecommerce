<?php

namespace App\Controller;

use App\Entity\Product;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class ProductController
{
    /**
     * Créer un produit
     *
     * @Route("/api/products", methods={"POST"})
     */
    public function create(
        Request $request,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $data = json_decode($request->getContent(), true);

        if (!is_array($data)) {
            return new JsonResponse([
                'message' => 'Données JSON invalides.'
            ], 400);
        }

        $requiredFields = [
            'name',
            'slug',
            'description',
            'price',
            'stock',
            'category',
            'subcategory',
            'brand',
            'model',
            'year',
            'color',
            'storage',
            'screen',
            'connector',
            'sim'
        ];

        foreach ($requiredFields as $field) {
            if (!isset($data[$field]) || $data[$field] === '') {
                return new JsonResponse([
                    'message' => 'Le champ "' . $field . '" est obligatoire.'
                ], 400);
            }
        }

        $product = new Product();

        $product->setName($data['name']);
        $product->setSlug($data['slug']);
        $product->setDescription($data['description']);
        $product->setPrice((int) $data['price']);
        $product->setStock((int) $data['stock']);

        // Catégorie
        $product->setCategory($data['category']);
        $product->setSubcategory($data['subcategory']);

        // Informations produit
        $product->setBrand($data['brand']);
        $product->setModel($data['model']);
        $product->setYear((int) $data['year']);
        $product->setColor($data['color']);

        // Caractéristiques
        $product->setStorage($data['storage']);
        $product->setScreen($data['screen']);
        $product->setConnector($data['connector']);
        $product->setSim($data['sim']);

        $entityManager->persist($product);
        $entityManager->flush();

        return new JsonResponse([
            'message' => 'Produit créé avec succès.',
            'product' => [
                'id' => $product->getId(),
                'name' => $product->getName(),
                'slug' => $product->getSlug(),
                'description' => $product->getDescription(),
                'price' => $product->getPrice(),
                'stock' => $product->getStock(),

                // Catégorie
                'category' => $product->getCategory(),
                'subcategory' => $product->getSubcategory(),

                // Informations produit
                'brand' => $product->getBrand(),
                'model' => $product->getModel(),
                'year' => $product->getYear(),
                'color' => $product->getColor(),

                // Caractéristiques
                'storage' => $product->getStorage(),
                'screen' => $product->getScreen(),
                'connector' => $product->getConnector(),
                'sim' => $product->getSim(),
            ]
        ], 201);
    }

    /**
     * Récupérer tous les produits
     *
     * @Route("/api/products", methods={"GET"})
     */
    public function index(
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $products = $entityManager
            ->getRepository(Product::class)
            ->findAll();

        $data = [];

        foreach ($products as $product) {
            $data[] = [
                'id' => $product->getId(),
                'name' => $product->getName(),
                'slug' => $product->getSlug(),
                'description' => $product->getDescription(),
                'price' => $product->getPrice(),
                'stock' => $product->getStock(),

                // Catégorie
                'category' => $product->getCategory(),
                'subcategory' => $product->getSubcategory(),

                // Informations produit
                'brand' => $product->getBrand(),
                'model' => $product->getModel(),
                'year' => $product->getYear(),
                'color' => $product->getColor(),

                // Caractéristiques
                'storage' => $product->getStorage(),
                'screen' => $product->getScreen(),
                'connector' => $product->getConnector(),
                'sim' => $product->getSim(),
            ];
        }

        return new JsonResponse([
            'products' => $data
        ]);
    }
}