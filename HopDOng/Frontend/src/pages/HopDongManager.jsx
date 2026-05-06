import React, { useState, useEffect } from 'react';
import { getAllHopDongs, createHopDong, updateHopDong, deleteHopDong } from '../services/hopDongService';

const HopDongManager = () => {
    const [hopDongs, setHopDongs] = useState([]);
    const [formData, setFormData] = useState({
        maHopDong: '', ngayKy: '', thoiHan: '', trangThai: 'DangThucHien'
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        fetchHopDongs();
    }, []);

    const fetchHopDongs = async () => {
        try {
            const response = await getAllHopDongs();
            setHopDongs(response.data);
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu:', error);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await updateHopDong(editId, formData);
            } else {
                await createHopDong(formData);
            }
            setFormData({ maHopDong: '', ngayKy: '', thoiHan: '', trangThai: 'DangThucHien' });
            setIsEditing(false);
            setEditId(null);
            fetchHopDongs();
        } catch (error) {
            console.error('Lỗi khi lưu:', error);
            alert('Có lỗi xảy ra!');
        }
    };

    const handleEdit = (hopDong) => {
        setIsEditing(true);
        setEditId(hopDong.id);
        setFormData({
            maHopDong: hopDong.maHopDong,
            ngayKy: hopDong.ngayKy,
            thoiHan: hopDong.thoiHan,
            trangThai: hopDong.trangThai
        });
    };

    const handleDelete = async (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            try {
                await deleteHopDong(id);
                fetchHopDongs();
            } catch (error) {
                console.error('Lỗi khi xóa:', error);
            }
        }
    };

    return (
        <div className="container">
            <h2 className="text-center mb-4 fw-bold text-uppercase text-primary">Quản Lý Hợp Đồng</h2>

            <div className="card shadow-sm mb-4 border-0">
                <div className="card-header bg-primary text-white fw-bold">
                    {isEditing ? 'Sửa Thông Tin Hợp Đồng' : 'Thêm Mới Hợp Đồng'}
                </div>
                <div className="card-body">
                    <form onSubmit={handleSubmit}>
                        <div className="row g-3 mb-3">
                            <div className="col-md-3">
                                <label className="form-label fw-semibold">Mã Hợp Đồng</label>
                                <input type="text" className="form-control" name="maHopDong" value={formData.maHopDong} onChange={handleInputChange} required placeholder="VD: HD-001" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label fw-semibold">Ngày Ký</label>
                                <input type="date" className="form-control" name="ngayKy" value={formData.ngayKy} onChange={handleInputChange} required />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label fw-semibold">Thời Hạn (Tháng)</label>
                                <input type="number" className="form-control" name="thoiHan" value={formData.thoiHan} onChange={handleInputChange} required placeholder="VD: 12" />
                            </div>
                            <div className="col-md-3">
                                <label className="form-label fw-semibold">Trạng Thái</label>
                                <select className="form-select" name="trangThai" value={formData.trangThai} onChange={handleInputChange}>
                                    <option value="DangThucHien">Đang Thực Hiện</option>
                                    <option value="TamDung">Tạm Dừng</option>
                                    <option value="ThanhLy">Thanh Lý</option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" className={`btn ${isEditing ? 'btn-warning' : 'btn-success'} px-4`}>
                            {isEditing ? 'Cập Nhật' : 'Tạo Mới'}
                        </button>
                        {isEditing && (
                            <button type="button" className="btn btn-secondary ms-2 px-4" onClick={() => { setIsEditing(false); setFormData({ maHopDong: '', ngayKy: '', thoiHan: '', trangThai: 'DangThucHien' }); }}>
                                Hủy Bỏ
                            </button>
                        )}
                    </form>
                </div>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0">
                    <table className="table table-hover table-striped mb-0 text-center align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>ID</th>
                                <th>Mã Hợp Đồng</th>
                                <th>Ngày Ký</th>
                                <th>Thời Hạn</th>
                                <th>Trạng Thái</th>
                                <th>Thao Tác</th>
                            </tr>
                        </thead>
                        <tbody>
                            {hopDongs.map((hd) => (
                                <tr key={hd.id}>
                                    <td className="text-muted">{hd.id}</td>
                                    <td className="fw-bold text-primary">{hd.maHopDong}</td>
                                    <td>{hd.ngayKy}</td>
                                    <td>{hd.thoiHan} tháng</td>
                                    <td>
                                        <span className={`badge rounded-pill px-3 py-2 ${
                                            hd.trangThai === 'DangThucHien' ? 'bg-success' : 
                                            hd.trangThai === 'TamDung' ? 'bg-warning text-dark' : 'bg-danger'
                                        }`}>
                                            {hd.trangThai === 'DangThucHien' ? 'Đang Thực Hiện' : 
                                             hd.trangThai === 'TamDung' ? 'Tạm Dừng' : 'Thanh Lý'}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn btn-sm btn-outline-primary me-2" onClick={() => handleEdit(hd)}>Sửa</button>
                                        <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(hd.id)}>Xóa</button>
                                    </td>
                                </tr>
                            ))}
                            {hopDongs.length === 0 && (
                                <tr><td colSpan="6" className="text-muted py-4">Chưa có dữ liệu hợp đồng</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default HopDongManager;