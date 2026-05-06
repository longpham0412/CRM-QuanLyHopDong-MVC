package com.example.demo.Service;

import com.example.demo.Entity.HopDong;
import com.example.demo.Repository.HopDongRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class HopDongService {
    private final HopDongRepository hopDongRepository;

    public List<HopDong> getAllContracts() {
        return hopDongRepository.findAll();
    }

    public Optional<HopDong> getContractById(Long id) {
        return hopDongRepository.findById(id);
    }

    public HopDong saveContract(HopDong contract) {
        return hopDongRepository.save(contract);
    }

    public HopDong updateContract(Long id, HopDong hopdongDetails) {
        HopDong existing = hopDongRepository.findById(id).orElseThrow(() -> new RuntimeException("Không tìm thấy hợp đồng với ID: " + id));

        existing.setMaHopDong(hopdongDetails.getMaHopDong());
        existing.setNgayKy(hopdongDetails.getNgayKy());
        existing.setThoiHan(hopdongDetails.getThoiHan());
        existing.setTrangThai(hopdongDetails.getTrangThai());

        return hopDongRepository.save(existing);
    }

    public void deleteContract(Long id) {
        hopDongRepository.deleteById(id);
    }
}