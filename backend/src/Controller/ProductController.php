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

        $this->fillProduct($product, $data);

        $entityManager->persist($product);
        $entityManager->flush();

        return new JsonResponse([
            'message' => 'Produit créé avec succès.',
            'product' => $this->serializeProduct($product)
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
            $data[] = $this->serializeProduct($product);
        }

        return new JsonResponse([
            'products' => $data
        ]);
    }

    /**
     * Récupérer un produit
     *
     * @Route("/api/products/{id}", methods={"GET"})
     */
    public function show(
        int $id,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $product = $entityManager
            ->getRepository(Product::class)
            ->find($id);

        if (!$product) {
            return new JsonResponse([
                'message' => 'Produit introuvable.'
            ], 404);
        }

        return new JsonResponse([
            'product' => $this->serializeProduct($product)
        ]);
    }

    /**
     * Modifier un produit
     *
     * @Route("/api/products/{id}", methods={"PUT"})
     */
    public function update(
        int $id,
        Request $request,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $product = $entityManager
            ->getRepository(Product::class)
            ->find($id);

        if (!$product) {
            return new JsonResponse([
                'message' => 'Produit introuvable.'
            ], 404);
        }

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

        $this->fillProduct($product, $data);

        $entityManager->flush();

        return new JsonResponse([
            'message' => 'Produit modifié avec succès.',
            'product' => $this->serializeProduct($product)
        ]);
    }

    /**
     * Supprimer un produit
     *
     * @Route("/api/products/{id}", methods={"DELETE"})
     */
    public function delete(
        int $id,
        EntityManagerInterface $entityManager
    ): JsonResponse {
        $product = $entityManager
            ->getRepository(Product::class)
            ->find($id);

        if (!$product) {
            return new JsonResponse([
                'message' => 'Produit introuvable.'
            ], 404);
        }

        $entityManager->remove($product);
        $entityManager->flush();

        return new JsonResponse([
            'message' => 'Produit supprimé avec succès.'
        ]);
    }

    /**
     * Remplir un produit avec les données reçues
     */
    private function fillProduct(Product $product, array $data): void
    {
        $product->setName($data['name']);
        $product->setSlug($data['slug']);
        $product->setDescription($data['description']);
        $product->setPrice((int) $data['price']);
        $product->setStock((int) $data['stock']);

        $product->setCategory($data['category']);
        $product->setSubcategory($data['subcategory']);

        $product->setBrand($data['brand']);
        $product->setModel($data['model']);
        $product->setYear((int) $data['year']);
        $product->setColor($data['color']);

        $product->setStorage($data['storage']);
        $product->setScreen($data['screen']);
        $product->setConnector($data['connector']);
        $product->setSim($data['sim']);
    }

    /**
     * Transformer Product en JSON
     */
    private function serializeProduct(Product $product): array
    {
        return [
            'id' => $product->getId(),
            'name' => $product->getName(),
            'slug' => $product->getSlug(),
            'description' => $product->getDescription(),
            'price' => $product->getPrice(),
            'stock' => $product->getStock(),
            'category' => $product->getCategory(),
            'subcategory' => $product->getSubcategory(),
            'brand' => $product->getBrand(),
            'model' => $product->getModel(),
            'year' => $product->getYear(),
            'color' => $product->getColor(),
            'storage' => $product->getStorage(),
            'screen' => $product->getScreen(),
            'connector' => $product->getConnector(),
            'sim' => $product->getSim(),
        ];
    }
}