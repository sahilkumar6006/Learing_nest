import { Controller, Get, UseGuards } from '@nestjs/common';
import { Roles } from 'src/guards/roles/roles.decorator';
import { RolesGuard } from 'src/guards/roles/roles.guard';
import { Role } from 'src/guards/roles/role.enums';

@Controller('rolesauth')
export class RolesauthController {
    @Get('admin-data')
    @UseGuards(RolesGuard)
    @Roles(Role.Admin)
    getAdminData() {
        return { message: 'This is admin data' };
    }
    @Get('user-data')
    @UseGuards(RolesGuard)
    @Roles(Role.User)
    getUserData() {
        return { message: 'This is user data' };
    }
    @Get('public-data')
    getPublicData() {
        return { message: 'This is public data accessible to everyone' };
    }
}
