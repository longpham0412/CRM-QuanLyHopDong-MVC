package com.example.demo.Entity;

import jakarta.persistence.*;
import lombok.Data;

import javax.naming.Name;
import java.time.LocalDate;
import java.util.Locale;

@Data
@Entity
@Table(name ="hd_hopdong" )
public class HopDong {
@Id @GeneratedValue(strategy = GenerationType.IDENTITY)
private Long Id;
private String maHopDong;

private LocalDate ngayKy;
private Integer thoiHan;
@Enumerated (EnumType.STRING)
    private TrangThaiHopDong trangThai= TrangThaiHopDong.DangThucHien;

}
