// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.3.0
// - protoc             (unknown)
// source: auth/v1/auth_service.proto

package authV1

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

const (
	AuthService_Register_FullMethodName           = "/auth.v1.AuthService/Register"
	AuthService_RegisterFinalize_FullMethodName   = "/auth.v1.AuthService/RegisterFinalize"
	AuthService_Login_FullMethodName              = "/auth.v1.AuthService/Login"
	AuthService_LoginFinalize_FullMethodName      = "/auth.v1.AuthService/LoginFinalize"
	AuthService_RefreshToken_FullMethodName       = "/auth.v1.AuthService/RefreshToken"
	AuthService_GetMFAStatus_FullMethodName       = "/auth.v1.AuthService/GetMFAStatus"
	AuthService_ActiveTOTP_FullMethodName         = "/auth.v1.AuthService/ActiveTOTP"
	AuthService_DisableTOTP_FullMethodName        = "/auth.v1.AuthService/DisableTOTP"
	AuthService_CheckTOTP_FullMethodName          = "/auth.v1.AuthService/CheckTOTP"
	AuthService_RecoverTOTP_FullMethodName        = "/auth.v1.AuthService/RecoverTOTP"
	AuthService_AddEmailMFA_FullMethodName        = "/auth.v1.AuthService/AddEmailMFA"
	AuthService_ActivateEmailMFA_FullMethodName   = "/auth.v1.AuthService/ActivateEmailMFA"
	AuthService_SetPrimaryEmailMFA_FullMethodName = "/auth.v1.AuthService/SetPrimaryEmailMFA"
	AuthService_SendCodeEmailMFA_FullMethodName   = "/auth.v1.AuthService/SendCodeEmailMFA"
	AuthService_CheckEmailMFA_FullMethodName      = "/auth.v1.AuthService/CheckEmailMFA"
	AuthService_DisableEmailMFA_FullMethodName    = "/auth.v1.AuthService/DisableEmailMFA"
	AuthService_GetAccountStatus_FullMethodName   = "/auth.v1.AuthService/GetAccountStatus"
)

// AuthServiceClient is the client API for AuthService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type AuthServiceClient interface {
	// 用户注册
	Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error)
	RegisterFinalize(ctx context.Context, in *RegisterFinalizeRequest, opts ...grpc.CallOption) (*RegisterFinalizeResponse, error)
	// 用户登录
	Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error)
	LoginFinalize(ctx context.Context, in *LoginFinalizeRequest, opts ...grpc.CallOption) (*LoginFinalizeResponse, error)
	// Token刷新
	RefreshToken(ctx context.Context, in *RefreshTokenRequest, opts ...grpc.CallOption) (*RefreshTokenResponse, error)
	// 检查MFA状态，并返回MFA状态
	GetMFAStatus(ctx context.Context, in *GetMFAStatusRequest, opts ...grpc.CallOption) (*GetMFAStatusResponse, error)
	// TOTP
	// 添加TOTP
	ActiveTOTP(ctx context.Context, in *ActiveTOTPRequest, opts ...grpc.CallOption) (*ActiveTOTPResponse, error)
	DisableTOTP(ctx context.Context, in *DisableTOTPRequest, opts ...grpc.CallOption) (*DisableTOTPResponse, error)
	CheckTOTP(ctx context.Context, in *CheckTOTPRequest, opts ...grpc.CallOption) (*CheckTOTPResponse, error)
	RecoverTOTP(ctx context.Context, in *RecoverTOTPRequest, opts ...grpc.CallOption) (*RecoverTOTPResponse, error)
	// Email
	AddEmailMFA(ctx context.Context, in *AddEmailMFARequest, opts ...grpc.CallOption) (*AddEmailMFAResponse, error)
	ActivateEmailMFA(ctx context.Context, in *ActivateEmailMFARequest, opts ...grpc.CallOption) (*ActivateEmailMFAResponse, error)
	SetPrimaryEmailMFA(ctx context.Context, in *SetPrimaryEmailMFARequest, opts ...grpc.CallOption) (*SetPrimaryEmailMFAResponse, error)
	SendCodeEmailMFA(ctx context.Context, in *SendCodeEmailMFARequest, opts ...grpc.CallOption) (*SendCodeEmailMFAResponse, error)
	CheckEmailMFA(ctx context.Context, in *CheckEmailMFARequest, opts ...grpc.CallOption) (*CheckEmailMFAResponse, error)
	DisableEmailMFA(ctx context.Context, in *DisableEmailMFARequest, opts ...grpc.CallOption) (*DisableEmailMFAResponse, error)
	// GetAccountStatus 获取sudo的ttl
	GetAccountStatus(ctx context.Context, in *GetAccountStatusRequest, opts ...grpc.CallOption) (*GetAccountStatusResponse, error)
}

type authServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewAuthServiceClient(cc grpc.ClientConnInterface) AuthServiceClient {
	return &authServiceClient{cc}
}

func (c *authServiceClient) Register(ctx context.Context, in *RegisterRequest, opts ...grpc.CallOption) (*RegisterResponse, error) {
	out := new(RegisterResponse)
	err := c.cc.Invoke(ctx, AuthService_Register_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) RegisterFinalize(ctx context.Context, in *RegisterFinalizeRequest, opts ...grpc.CallOption) (*RegisterFinalizeResponse, error) {
	out := new(RegisterFinalizeResponse)
	err := c.cc.Invoke(ctx, AuthService_RegisterFinalize_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) Login(ctx context.Context, in *LoginRequest, opts ...grpc.CallOption) (*LoginResponse, error) {
	out := new(LoginResponse)
	err := c.cc.Invoke(ctx, AuthService_Login_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) LoginFinalize(ctx context.Context, in *LoginFinalizeRequest, opts ...grpc.CallOption) (*LoginFinalizeResponse, error) {
	out := new(LoginFinalizeResponse)
	err := c.cc.Invoke(ctx, AuthService_LoginFinalize_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) RefreshToken(ctx context.Context, in *RefreshTokenRequest, opts ...grpc.CallOption) (*RefreshTokenResponse, error) {
	out := new(RefreshTokenResponse)
	err := c.cc.Invoke(ctx, AuthService_RefreshToken_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) GetMFAStatus(ctx context.Context, in *GetMFAStatusRequest, opts ...grpc.CallOption) (*GetMFAStatusResponse, error) {
	out := new(GetMFAStatusResponse)
	err := c.cc.Invoke(ctx, AuthService_GetMFAStatus_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) ActiveTOTP(ctx context.Context, in *ActiveTOTPRequest, opts ...grpc.CallOption) (*ActiveTOTPResponse, error) {
	out := new(ActiveTOTPResponse)
	err := c.cc.Invoke(ctx, AuthService_ActiveTOTP_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) DisableTOTP(ctx context.Context, in *DisableTOTPRequest, opts ...grpc.CallOption) (*DisableTOTPResponse, error) {
	out := new(DisableTOTPResponse)
	err := c.cc.Invoke(ctx, AuthService_DisableTOTP_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) CheckTOTP(ctx context.Context, in *CheckTOTPRequest, opts ...grpc.CallOption) (*CheckTOTPResponse, error) {
	out := new(CheckTOTPResponse)
	err := c.cc.Invoke(ctx, AuthService_CheckTOTP_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) RecoverTOTP(ctx context.Context, in *RecoverTOTPRequest, opts ...grpc.CallOption) (*RecoverTOTPResponse, error) {
	out := new(RecoverTOTPResponse)
	err := c.cc.Invoke(ctx, AuthService_RecoverTOTP_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) AddEmailMFA(ctx context.Context, in *AddEmailMFARequest, opts ...grpc.CallOption) (*AddEmailMFAResponse, error) {
	out := new(AddEmailMFAResponse)
	err := c.cc.Invoke(ctx, AuthService_AddEmailMFA_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) ActivateEmailMFA(ctx context.Context, in *ActivateEmailMFARequest, opts ...grpc.CallOption) (*ActivateEmailMFAResponse, error) {
	out := new(ActivateEmailMFAResponse)
	err := c.cc.Invoke(ctx, AuthService_ActivateEmailMFA_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) SetPrimaryEmailMFA(ctx context.Context, in *SetPrimaryEmailMFARequest, opts ...grpc.CallOption) (*SetPrimaryEmailMFAResponse, error) {
	out := new(SetPrimaryEmailMFAResponse)
	err := c.cc.Invoke(ctx, AuthService_SetPrimaryEmailMFA_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) SendCodeEmailMFA(ctx context.Context, in *SendCodeEmailMFARequest, opts ...grpc.CallOption) (*SendCodeEmailMFAResponse, error) {
	out := new(SendCodeEmailMFAResponse)
	err := c.cc.Invoke(ctx, AuthService_SendCodeEmailMFA_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) CheckEmailMFA(ctx context.Context, in *CheckEmailMFARequest, opts ...grpc.CallOption) (*CheckEmailMFAResponse, error) {
	out := new(CheckEmailMFAResponse)
	err := c.cc.Invoke(ctx, AuthService_CheckEmailMFA_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) DisableEmailMFA(ctx context.Context, in *DisableEmailMFARequest, opts ...grpc.CallOption) (*DisableEmailMFAResponse, error) {
	out := new(DisableEmailMFAResponse)
	err := c.cc.Invoke(ctx, AuthService_DisableEmailMFA_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *authServiceClient) GetAccountStatus(ctx context.Context, in *GetAccountStatusRequest, opts ...grpc.CallOption) (*GetAccountStatusResponse, error) {
	out := new(GetAccountStatusResponse)
	err := c.cc.Invoke(ctx, AuthService_GetAccountStatus_FullMethodName, in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// AuthServiceServer is the server API for AuthService service.
// All implementations must embed UnimplementedAuthServiceServer
// for forward compatibility
type AuthServiceServer interface {
	// 用户注册
	Register(context.Context, *RegisterRequest) (*RegisterResponse, error)
	RegisterFinalize(context.Context, *RegisterFinalizeRequest) (*RegisterFinalizeResponse, error)
	// 用户登录
	Login(context.Context, *LoginRequest) (*LoginResponse, error)
	LoginFinalize(context.Context, *LoginFinalizeRequest) (*LoginFinalizeResponse, error)
	// Token刷新
	RefreshToken(context.Context, *RefreshTokenRequest) (*RefreshTokenResponse, error)
	// 检查MFA状态，并返回MFA状态
	GetMFAStatus(context.Context, *GetMFAStatusRequest) (*GetMFAStatusResponse, error)
	// TOTP
	// 添加TOTP
	ActiveTOTP(context.Context, *ActiveTOTPRequest) (*ActiveTOTPResponse, error)
	DisableTOTP(context.Context, *DisableTOTPRequest) (*DisableTOTPResponse, error)
	CheckTOTP(context.Context, *CheckTOTPRequest) (*CheckTOTPResponse, error)
	RecoverTOTP(context.Context, *RecoverTOTPRequest) (*RecoverTOTPResponse, error)
	// Email
	AddEmailMFA(context.Context, *AddEmailMFARequest) (*AddEmailMFAResponse, error)
	ActivateEmailMFA(context.Context, *ActivateEmailMFARequest) (*ActivateEmailMFAResponse, error)
	SetPrimaryEmailMFA(context.Context, *SetPrimaryEmailMFARequest) (*SetPrimaryEmailMFAResponse, error)
	SendCodeEmailMFA(context.Context, *SendCodeEmailMFARequest) (*SendCodeEmailMFAResponse, error)
	CheckEmailMFA(context.Context, *CheckEmailMFARequest) (*CheckEmailMFAResponse, error)
	DisableEmailMFA(context.Context, *DisableEmailMFARequest) (*DisableEmailMFAResponse, error)
	// GetAccountStatus 获取sudo的ttl
	GetAccountStatus(context.Context, *GetAccountStatusRequest) (*GetAccountStatusResponse, error)
	mustEmbedUnimplementedAuthServiceServer()
}

// UnimplementedAuthServiceServer must be embedded to have forward compatible implementations.
type UnimplementedAuthServiceServer struct {
}

func (UnimplementedAuthServiceServer) Register(context.Context, *RegisterRequest) (*RegisterResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Register not implemented")
}
func (UnimplementedAuthServiceServer) RegisterFinalize(context.Context, *RegisterFinalizeRequest) (*RegisterFinalizeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RegisterFinalize not implemented")
}
func (UnimplementedAuthServiceServer) Login(context.Context, *LoginRequest) (*LoginResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Login not implemented")
}
func (UnimplementedAuthServiceServer) LoginFinalize(context.Context, *LoginFinalizeRequest) (*LoginFinalizeResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method LoginFinalize not implemented")
}
func (UnimplementedAuthServiceServer) RefreshToken(context.Context, *RefreshTokenRequest) (*RefreshTokenResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RefreshToken not implemented")
}
func (UnimplementedAuthServiceServer) GetMFAStatus(context.Context, *GetMFAStatusRequest) (*GetMFAStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetMFAStatus not implemented")
}
func (UnimplementedAuthServiceServer) ActiveTOTP(context.Context, *ActiveTOTPRequest) (*ActiveTOTPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ActiveTOTP not implemented")
}
func (UnimplementedAuthServiceServer) DisableTOTP(context.Context, *DisableTOTPRequest) (*DisableTOTPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DisableTOTP not implemented")
}
func (UnimplementedAuthServiceServer) CheckTOTP(context.Context, *CheckTOTPRequest) (*CheckTOTPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckTOTP not implemented")
}
func (UnimplementedAuthServiceServer) RecoverTOTP(context.Context, *RecoverTOTPRequest) (*RecoverTOTPResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RecoverTOTP not implemented")
}
func (UnimplementedAuthServiceServer) AddEmailMFA(context.Context, *AddEmailMFARequest) (*AddEmailMFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddEmailMFA not implemented")
}
func (UnimplementedAuthServiceServer) ActivateEmailMFA(context.Context, *ActivateEmailMFARequest) (*ActivateEmailMFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ActivateEmailMFA not implemented")
}
func (UnimplementedAuthServiceServer) SetPrimaryEmailMFA(context.Context, *SetPrimaryEmailMFARequest) (*SetPrimaryEmailMFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetPrimaryEmailMFA not implemented")
}
func (UnimplementedAuthServiceServer) SendCodeEmailMFA(context.Context, *SendCodeEmailMFARequest) (*SendCodeEmailMFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SendCodeEmailMFA not implemented")
}
func (UnimplementedAuthServiceServer) CheckEmailMFA(context.Context, *CheckEmailMFARequest) (*CheckEmailMFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CheckEmailMFA not implemented")
}
func (UnimplementedAuthServiceServer) DisableEmailMFA(context.Context, *DisableEmailMFARequest) (*DisableEmailMFAResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DisableEmailMFA not implemented")
}
func (UnimplementedAuthServiceServer) GetAccountStatus(context.Context, *GetAccountStatusRequest) (*GetAccountStatusResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetAccountStatus not implemented")
}
func (UnimplementedAuthServiceServer) mustEmbedUnimplementedAuthServiceServer() {}

// UnsafeAuthServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to AuthServiceServer will
// result in compilation errors.
type UnsafeAuthServiceServer interface {
	mustEmbedUnimplementedAuthServiceServer()
}

func RegisterAuthServiceServer(s grpc.ServiceRegistrar, srv AuthServiceServer) {
	s.RegisterService(&AuthService_ServiceDesc, srv)
}

func _AuthService_Register_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Register(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_Register_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Register(ctx, req.(*RegisterRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_RegisterFinalize_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RegisterFinalizeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).RegisterFinalize(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_RegisterFinalize_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).RegisterFinalize(ctx, req.(*RegisterFinalizeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_Login_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).Login(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_Login_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).Login(ctx, req.(*LoginRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_LoginFinalize_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LoginFinalizeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).LoginFinalize(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_LoginFinalize_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).LoginFinalize(ctx, req.(*LoginFinalizeRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_RefreshToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RefreshTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).RefreshToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_RefreshToken_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).RefreshToken(ctx, req.(*RefreshTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_GetMFAStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetMFAStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetMFAStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_GetMFAStatus_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetMFAStatus(ctx, req.(*GetMFAStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_ActiveTOTP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ActiveTOTPRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).ActiveTOTP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_ActiveTOTP_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).ActiveTOTP(ctx, req.(*ActiveTOTPRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_DisableTOTP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DisableTOTPRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).DisableTOTP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_DisableTOTP_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).DisableTOTP(ctx, req.(*DisableTOTPRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_CheckTOTP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckTOTPRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).CheckTOTP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_CheckTOTP_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).CheckTOTP(ctx, req.(*CheckTOTPRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_RecoverTOTP_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RecoverTOTPRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).RecoverTOTP(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_RecoverTOTP_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).RecoverTOTP(ctx, req.(*RecoverTOTPRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_AddEmailMFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddEmailMFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).AddEmailMFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_AddEmailMFA_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).AddEmailMFA(ctx, req.(*AddEmailMFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_ActivateEmailMFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ActivateEmailMFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).ActivateEmailMFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_ActivateEmailMFA_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).ActivateEmailMFA(ctx, req.(*ActivateEmailMFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_SetPrimaryEmailMFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetPrimaryEmailMFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).SetPrimaryEmailMFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_SetPrimaryEmailMFA_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).SetPrimaryEmailMFA(ctx, req.(*SetPrimaryEmailMFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_SendCodeEmailMFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SendCodeEmailMFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).SendCodeEmailMFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_SendCodeEmailMFA_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).SendCodeEmailMFA(ctx, req.(*SendCodeEmailMFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_CheckEmailMFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CheckEmailMFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).CheckEmailMFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_CheckEmailMFA_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).CheckEmailMFA(ctx, req.(*CheckEmailMFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_DisableEmailMFA_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DisableEmailMFARequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).DisableEmailMFA(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_DisableEmailMFA_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).DisableEmailMFA(ctx, req.(*DisableEmailMFARequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _AuthService_GetAccountStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetAccountStatusRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(AuthServiceServer).GetAccountStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: AuthService_GetAccountStatus_FullMethodName,
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(AuthServiceServer).GetAccountStatus(ctx, req.(*GetAccountStatusRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// AuthService_ServiceDesc is the grpc.ServiceDesc for AuthService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var AuthService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "auth.v1.AuthService",
	HandlerType: (*AuthServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Register",
			Handler:    _AuthService_Register_Handler,
		},
		{
			MethodName: "RegisterFinalize",
			Handler:    _AuthService_RegisterFinalize_Handler,
		},
		{
			MethodName: "Login",
			Handler:    _AuthService_Login_Handler,
		},
		{
			MethodName: "LoginFinalize",
			Handler:    _AuthService_LoginFinalize_Handler,
		},
		{
			MethodName: "RefreshToken",
			Handler:    _AuthService_RefreshToken_Handler,
		},
		{
			MethodName: "GetMFAStatus",
			Handler:    _AuthService_GetMFAStatus_Handler,
		},
		{
			MethodName: "ActiveTOTP",
			Handler:    _AuthService_ActiveTOTP_Handler,
		},
		{
			MethodName: "DisableTOTP",
			Handler:    _AuthService_DisableTOTP_Handler,
		},
		{
			MethodName: "CheckTOTP",
			Handler:    _AuthService_CheckTOTP_Handler,
		},
		{
			MethodName: "RecoverTOTP",
			Handler:    _AuthService_RecoverTOTP_Handler,
		},
		{
			MethodName: "AddEmailMFA",
			Handler:    _AuthService_AddEmailMFA_Handler,
		},
		{
			MethodName: "ActivateEmailMFA",
			Handler:    _AuthService_ActivateEmailMFA_Handler,
		},
		{
			MethodName: "SetPrimaryEmailMFA",
			Handler:    _AuthService_SetPrimaryEmailMFA_Handler,
		},
		{
			MethodName: "SendCodeEmailMFA",
			Handler:    _AuthService_SendCodeEmailMFA_Handler,
		},
		{
			MethodName: "CheckEmailMFA",
			Handler:    _AuthService_CheckEmailMFA_Handler,
		},
		{
			MethodName: "DisableEmailMFA",
			Handler:    _AuthService_DisableEmailMFA_Handler,
		},
		{
			MethodName: "GetAccountStatus",
			Handler:    _AuthService_GetAccountStatus_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "auth/v1/auth_service.proto",
}
