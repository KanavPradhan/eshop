package com.eshop.service;

import com.eshop.entity.Role;
import com.eshop.payload.LoginDto;
import com.eshop.payload.RegisterDto;

import java.util.List;

public interface AuthService {
    String login(LoginDto loginDto);
    String register(RegisterDto registerDto);
    String createRole(String name);
    String deleteRole(String name);
    List<Role> getAllRoles();
    String getRoleByName(String name);

}
