<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class PermissionSeeder extends Seeder
{
    public function run(): void
    {
        $permissions = [
            'users:view',
            'users:create',
            'users:edit',
            'users:delete'
        ];

        foreach($permissions as $permission) {
            Permission::create(['name' => $permission, 'guard_name' => 'sanctum']);
        }
        
        $roleGuest = Role::where('name', '=', 'Guest')->first();
        $roleGuest->givePermissionTo(['users:view']);

        $roleUser = Role::where('name', '=', 'User')->first();
        $roleUser->givePermissionTo(['users:view', 'users:create', 'users:edit']);

        $roleAdmin = Role::where('name', '=', 'Admin')->first();
        $roleAdmin->givePermissionTo(['users:view', 'users:create', 'users:edit', 'users:delete']);
    }
}
