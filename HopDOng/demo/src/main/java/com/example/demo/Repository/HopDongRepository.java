package com.example.demo.Repository;

import com.example.demo.Entity.HopDong;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface HopDongRepository extends JpaRepository<HopDong, Long> {

}
