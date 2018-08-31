<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class ReserveController extends Controller
{
    public function store(Request $request){

        $request->validate([
            'name' => 'required|min:2|max:55',
            'email' => 'required|email',
            'event' => 'required',
            'date' => 'required',
            'message' => 'required',
        ]);
        $data = $request->all();

        Mail::send('email.reserved', ['data'=>$data], function ($message) use ($data){
            $mailAdmin = env('MAIL_ADMIN');
            $message->from($data['email'], $data['name']);
            $message->to($mailAdmin)->subject('Reserved');
        });

        return response()->json($request);
    }
}
