<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Role::insert([
            [
                'name' => 'Admin',
                'guard_name' => 'sanctum',
            ],
            [
                'name' => 'User',
                'guard_name' => 'sanctum',
            ],
            [
                'name' => 'Guest',
                'guard_name' => 'sanctum',
            ],
        ]);
    }
}