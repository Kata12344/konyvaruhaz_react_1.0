<?php

use App\Models\Konyv;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('konyvs', function (Blueprint $table) {
            $table->id();
            $table->string('cim');
            $table->string('szerzo');
            $table->integer('ar');
            $table->timestamps();
        });

        Konyv::create(['cim' => 'A pál utcai fiúk', 'szerzo' => "Molnár Ferenc", 'ar'=> 1234]);
        Konyv::create(['cim' => 'Malevil', 'szerzo' => "Robert Merle", 'ar'=> 2234]);
        Konyv::create(['cim' => 'Elvásik a vörös csillag', 'szerzo' => "Wass Albert", 'ar'=> 2341]);

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('konyvs');
    }
};
