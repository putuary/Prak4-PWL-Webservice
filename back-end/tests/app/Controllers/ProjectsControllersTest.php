<?php

namespace App;

use App\Controllers\Komentar;
use CodeIgniter\Test\DatabaseTestTrait;
use CodeIgniter\Test\FeatureTestTrait;

class TestFoo extends CIUnitTestCase
{
    use DatabaseTestTrait, FeatureTestTrait;

    protected function test_index(): void
    {
        $result = $this->call('get', '/komentar');

        $result = $this->call('get', 'komentar'), [
            'nama'     => 'Fred Flintstone',
            'komentar' => 'Tes'
        ];
        
        foreach ($hasil as $result) {
            $hasil
        }
    }

    protected function test_create(): void
    {
        $coment= Komentar::create([
            $data=[
                'nama'     => 'anon',
                'komentar' => 'Tes Komentar'
            ]
        ])
        $response = $this->postJson('post', '/komentar', data : [
            'nama'     => 'anon',
            'komentar' => 'Tes Komentar'
        ]);
    }
}