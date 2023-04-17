package com.example.SpringApi.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.SpringApi.entity.Commit;

public interface CommitsRepository  extends JpaRepository<Commit,Long>{
    
}
