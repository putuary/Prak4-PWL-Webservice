<?php

namespace App\Controllers;

header('Access-Control-Allow-Origin: http://localhost:3000');
use App\Models\KomentarModel;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\RESTful\ResourceController;

class Komentar extends ResourceController
{
    use ResponseTrait;
    // all users
    public function index()
    {
        $model = new KomentarModel();
        $data['komentar'] = $model->orderBy('id', 'DESC')->findAll();
        return $this->respond($data);
    }
    // create
    public function create()
    {
        $model = new KomentarModel();
        $data = [
            'nama' => $this->request->getVar('nama'),
            'komentar' => $this->request->getVar('komentar'),
        ];
        $model->insert($data);
        $response = [
            'status' => 201,
            'error' => null,
            'messages' => [
                'success' => 'Data komentar berhasil ditambahkan.',
            ],
        ];
        return view('success');
    }
    // single user
    public function show($id = null)
    {
        $model = new KomentarModel();
        $data = $model->where('id', $id)->first();
        if ($data) {
            return $this->respond($data);
        } else {
            return $this->failNotFound('Data Komentar tidak ditemukan.');
        }
    }
    // update
    // delete
    public function delete($id = null)
    {
        $model = new KomentarModel();
        $data = $model->where('id', $id)->delete($id);
        if ($data) {
            $model->delete($id);
            $response = [
                'status' => 200,
                'error' => null,
                'messages' => [
                    'success' => 'Data Komentar berhasil dihapus.',
                ],
            ];
            return $this->respondDeleted($response);
        } else {
            return $this->failNotFound('Data Komentar tidak ditemukan.');
        }
    }
}