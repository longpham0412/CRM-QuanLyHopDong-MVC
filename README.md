"# CRM-QuanLyHopDong-MCV-V1" 
 CRM - Module Quản Lý Hợp Đồng (Contract Management)
 Hệ thống CRM Online là một ứng dụng Web Full-stack được xây dựng nhằm hỗ trợ doanh nghiệp quản lý vòng đời khách hàng. Phân hệ Quản lý Hợp đồng tập trung vào việc khởi tạo, lưu trữ và theo dõi các thỏa thuận pháp lý gắn liền với từng khách hàng.  Dự án tuân thủ mô hình kiến trúc MVC, tách biệt rõ ràng giữa giao diện người dùng và xử lý nghiệp vụ.  🛠 I. Công Nghệ Sử DụngBackend (Spring Boot)Ngôn ngữ: Java (JDK 17)  Framework: Spring Boot, Spring Data JPA, Hibernate  Công cụ hỗ trợ: Lombok  Quản lý dự án: Maven  Frontend (React.js)Thư viện: React.js (Vite)  Giao diện: HTML5/CSS3 (Custom CSS)  Giao tiếp API: Fetch API  Cơ sở dữ liệuHệ quản trị: MySQL 8.0+  🚀 II. Hướng Dẫn Cài ĐặtBước 1: Khởi tạo Cơ sở dữ liệuMở công cụ quản trị MySQL (HeidiSQL, Workbench, v.v.).  Tạo database mới:SQLCREATE DATABASE crmonline_pro;
Thực thi file script CRMOnline_Pro.sql (nếu có) để khởi tạo cấu trúc bảng.  Bước 2: Cấu hình và chạy BackendClone dự án:Bashgit clone https://github.com/longpham0412/CRM-Module-HopDong.git

2.  **Cấu hình kết nối:** Chỉnh sửa file `src/main/resources/application.yaml`:
    ```yaml
    spring:
      datasource:
        url: "jdbc:mysql://localhost:3306/crmonline_pro"
        username: root
        password: 
    ```
3.  **Khởi chạy:** Chạy file `DemoApplication.java` từ IDE (IntelliJ, VS Code).
4.  **Kiểm tra:** Backend hoạt động tại cổng `8080` với context-path là `/crm-ver1`.

### Bước 3: Cài đặt và chạy Frontend
1.  Di chuyển vào thư mục frontend:
    ```bash
    cd HopDong
    ```
2.  Cài đặt các thư viện phụ thuộc:
    ```bash
    npm install
    
Khởi chạy giao diện:Bashnpm run dev

Truy cập hệ thống qua trình duyệt tại địa chỉ mặc định của Vite (thường là http://localhost:5173). 

📖 III. Nghiệp Vụ & API Endpoints

 Chức năng chínhQuản lý trạng thái: 
 
 Theo dõi hợp đồng qua các giai đoạn: Đang thực hiện, Tạm dừng, Thanh lý.  
 
 Thông tin chi tiết: Quản lý mã hợp đồng, ngày ký, và thời hạn.  
 
  API EndpointsBase URL: http://localhost:8080/crm-ver1/api/hopdong
