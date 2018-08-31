<?php

namespace App\Http\Controllers;

use App\Citation;
use Illuminate\Http\Request;

class CitationsController extends Controller
{
    public function index()
    {
        return Citation::all();
    }
}
