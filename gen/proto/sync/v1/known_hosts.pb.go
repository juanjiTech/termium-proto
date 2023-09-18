// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.31.0
// 	protoc        (unknown)
// source: sync/v1/known_hosts.proto

package syncV1

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	timestamppb "google.golang.org/protobuf/types/known/timestamppb"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type KnownHost struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Id        string                 `protobuf:"bytes,1,opt,name=id,proto3" json:"id,omitempty"`                                // 内部唯一ID ulid
	CreatedAt *timestamppb.Timestamp `protobuf:"bytes,2,opt,name=created_at,json=createdAt,proto3" json:"created_at,omitempty"` // 创建时间
	UpdatedAt *timestamppb.Timestamp `protobuf:"bytes,3,opt,name=updated_at,json=updatedAt,proto3" json:"updated_at,omitempty"` // 更新时间
	DeletedAt *timestamppb.Timestamp `protobuf:"bytes,4,opt,name=deleted_at,json=deletedAt,proto3" json:"deleted_at,omitempty"` // 删除时间
	Host      string                 `protobuf:"bytes,11,opt,name=host,proto3" json:"host,omitempty"`
	PublicKey string                 `protobuf:"bytes,12,opt,name=public_key,json=publicKey,proto3" json:"public_key,omitempty"` // 公钥
}

func (x *KnownHost) Reset() {
	*x = KnownHost{}
	if protoimpl.UnsafeEnabled {
		mi := &file_sync_v1_known_hosts_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *KnownHost) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*KnownHost) ProtoMessage() {}

func (x *KnownHost) ProtoReflect() protoreflect.Message {
	mi := &file_sync_v1_known_hosts_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use KnownHost.ProtoReflect.Descriptor instead.
func (*KnownHost) Descriptor() ([]byte, []int) {
	return file_sync_v1_known_hosts_proto_rawDescGZIP(), []int{0}
}

func (x *KnownHost) GetId() string {
	if x != nil {
		return x.Id
	}
	return ""
}

func (x *KnownHost) GetCreatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.CreatedAt
	}
	return nil
}

func (x *KnownHost) GetUpdatedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.UpdatedAt
	}
	return nil
}

func (x *KnownHost) GetDeletedAt() *timestamppb.Timestamp {
	if x != nil {
		return x.DeletedAt
	}
	return nil
}

func (x *KnownHost) GetHost() string {
	if x != nil {
		return x.Host
	}
	return ""
}

func (x *KnownHost) GetPublicKey() string {
	if x != nil {
		return x.PublicKey
	}
	return ""
}

var File_sync_v1_known_hosts_proto protoreflect.FileDescriptor

var file_sync_v1_known_hosts_proto_rawDesc = []byte{
	0x0a, 0x19, 0x73, 0x79, 0x6e, 0x63, 0x2f, 0x76, 0x31, 0x2f, 0x6b, 0x6e, 0x6f, 0x77, 0x6e, 0x5f,
	0x68, 0x6f, 0x73, 0x74, 0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x07, 0x73, 0x79, 0x6e,
	0x63, 0x2e, 0x76, 0x31, 0x1a, 0x1f, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2f, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x62, 0x75, 0x66, 0x2f, 0x74, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xff, 0x01, 0x0a, 0x09, 0x4b, 0x6e, 0x6f, 0x77, 0x6e, 0x48,
	0x6f, 0x73, 0x74, 0x12, 0x0e, 0x0a, 0x02, 0x69, 0x64, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x02, 0x69, 0x64, 0x12, 0x39, 0x0a, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61,
	0x74, 0x18, 0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65,
	0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74,
	0x61, 0x6d, 0x70, 0x52, 0x09, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39,
	0x0a, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x62, 0x75, 0x66, 0x2e, 0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09,
	0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x64, 0x41, 0x74, 0x12, 0x39, 0x0a, 0x0a, 0x64, 0x65, 0x6c,
	0x65, 0x74, 0x65, 0x64, 0x5f, 0x61, 0x74, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e,
	0x67, 0x6f, 0x6f, 0x67, 0x6c, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x62, 0x75, 0x66, 0x2e,
	0x54, 0x69, 0x6d, 0x65, 0x73, 0x74, 0x61, 0x6d, 0x70, 0x52, 0x09, 0x64, 0x65, 0x6c, 0x65, 0x74,
	0x65, 0x64, 0x41, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x6f, 0x73, 0x74, 0x18, 0x0b, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x68, 0x6f, 0x73, 0x74, 0x12, 0x1d, 0x0a, 0x0a, 0x70, 0x75, 0x62, 0x6c,
	0x69, 0x63, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x70, 0x75,
	0x62, 0x6c, 0x69, 0x63, 0x4b, 0x65, 0x79, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x6a, 0x75, 0x61, 0x6e, 0x6a, 0x69, 0x54, 0x65, 0x63, 0x68,
	0x2f, 0x6a, 0x54, 0x65, 0x72, 0x6d, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x67, 0x65, 0x6e,
	0x2f, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x73, 0x79, 0x6e, 0x63, 0x2f, 0x76, 0x31, 0x3b, 0x73,
	0x79, 0x6e, 0x63, 0x56, 0x31, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_sync_v1_known_hosts_proto_rawDescOnce sync.Once
	file_sync_v1_known_hosts_proto_rawDescData = file_sync_v1_known_hosts_proto_rawDesc
)

func file_sync_v1_known_hosts_proto_rawDescGZIP() []byte {
	file_sync_v1_known_hosts_proto_rawDescOnce.Do(func() {
		file_sync_v1_known_hosts_proto_rawDescData = protoimpl.X.CompressGZIP(file_sync_v1_known_hosts_proto_rawDescData)
	})
	return file_sync_v1_known_hosts_proto_rawDescData
}

var file_sync_v1_known_hosts_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_sync_v1_known_hosts_proto_goTypes = []interface{}{
	(*KnownHost)(nil),             // 0: sync.v1.KnownHost
	(*timestamppb.Timestamp)(nil), // 1: google.protobuf.Timestamp
}
var file_sync_v1_known_hosts_proto_depIdxs = []int32{
	1, // 0: sync.v1.KnownHost.created_at:type_name -> google.protobuf.Timestamp
	1, // 1: sync.v1.KnownHost.updated_at:type_name -> google.protobuf.Timestamp
	1, // 2: sync.v1.KnownHost.deleted_at:type_name -> google.protobuf.Timestamp
	3, // [3:3] is the sub-list for method output_type
	3, // [3:3] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_sync_v1_known_hosts_proto_init() }
func file_sync_v1_known_hosts_proto_init() {
	if File_sync_v1_known_hosts_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_sync_v1_known_hosts_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*KnownHost); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_sync_v1_known_hosts_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   0,
		},
		GoTypes:           file_sync_v1_known_hosts_proto_goTypes,
		DependencyIndexes: file_sync_v1_known_hosts_proto_depIdxs,
		MessageInfos:      file_sync_v1_known_hosts_proto_msgTypes,
	}.Build()
	File_sync_v1_known_hosts_proto = out.File
	file_sync_v1_known_hosts_proto_rawDesc = nil
	file_sync_v1_known_hosts_proto_goTypes = nil
	file_sync_v1_known_hosts_proto_depIdxs = nil
}
