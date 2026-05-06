package com.example.demo.Controller;

import com.example.demo.Entity.HopDong;
import com.example.demo.Service.HopDongService; // Import Service thay vì Repository
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/hopdong")
@RequiredArgsConstructor
public class HopDongController {

    private final HopDongService hopDongService;

    @GetMapping
    public ResponseEntity<List<HopDong>> getAll() {
        return ResponseEntity.ok(hopDongService.getAllContracts());
    }
    @PostMapping
    public ResponseEntity<HopDong> create(@RequestBody HopDong hopdong) {
        return ResponseEntity.ok(hopDongService.saveContract(hopdong));
    }

    @PutMapping("/{id}")
    public ResponseEntity<HopDong> update(@PathVariable Long id, @RequestBody HopDong hopdongDetails) {
        return ResponseEntity.ok(hopDongService.updateContract(id, hopdongDetails));
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        hopDongService.deleteContract(id);
        return ResponseEntity.ok().build();
    }
}