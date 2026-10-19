# SEO & Tăng Trưởng Playbook — Jotun Long Hậu

Tài liệu hướng dẫn đội ngũ vận hành website tăng lượng khách tiếp cận (reach), thứ hạng tìm kiếm (SEO) và duy trì nội dung evergreen.

## 1. Việc cần làm ngay (một lần, ngoài website)

Đây là những việc **quan trọng nhất** với một cửa hàng bán lẻ địa phương — phần lớn khách tìm "đại lý sơn jotun gần đây" trên Google Maps chứ không vào thẳng website:

- [ ] **Google Business Profile** (https://business.google.com): tạo/xác minh hồ sơ doanh nghiệp với đúng tên, địa chỉ `243 ĐT826C, Long Hậu, Cần Giuộc, Long An`, SĐT `0937.025.674`, giờ mở cửa, ảnh cửa hàng, link website. Đăng ảnh công trình thực tế hàng tuần. **Xin khách hàng đánh giá 5 sao sau mỗi đơn hàng** — số lượng và chất lượng review là yếu tố xếp hạng local số 1.
- [ ] **Google Search Console** (https://search.google.com/search-console): xác minh domain `jotunlonghau.com`, gửi sitemap `https://jotunlonghau.com/sitemap.xml`. Theo dõi từ khóa nào đang ra traffic mỗi tháng.
- [ ] **Zalo Official Account**: khách Việt ở khu vực nông thôn/ven đô dùng Zalo nhiều hơn email. Tạo Zalo OA, gắn link vào footer website (hiện icon Zalo ở footer đang trỏ về `#` — cần cập nhật `src/components/footer/footer.tsx`).
- [ ] **Facebook Page**: tương tự, tạo/cập nhật page và gắn link thật vào footer. Đăng lại mỗi bài blog mới lên page + các nhóm cư dân, nhóm xây dựng khu vực Cần Giuộc, Long Hậu, Nhà Bè.
- [ ] Đăng ký doanh nghiệp trên các bản đồ/danh bạ khác: Cốc Cốc Map, Bing Places, trang vàng.

## 2. Nội dung evergreen — chiến lược & lịch đăng

Nội dung evergreen là bài viết **không lỗi thời**, trả lời câu hỏi khách luôn tìm kiếm (cách tính lượng sơn, chống thấm, chọn màu…). Mỗi bài tốt sẽ kéo khách từ Google trong nhiều năm.

### Bài đã có (không xóa, chỉ cập nhật)

| Bài viết | Từ khóa chính |
|---|---|
| Cách tính lượng sơn nhà cần dùng | cách tính lượng sơn, 1 thùng sơn sơn được bao nhiêu m2 |
| Quy trình sơn nhà đúng kỹ thuật 7 bước | quy trình sơn nhà, cách sơn nhà |
| Chống thấm tường nhà | chống thấm tường, tường bị thấm nước |
| Cách chọn màu sơn nhà đẹp | màu sơn nhà đẹp, chọn màu sơn |
| Sơn nội thất vs sơn ngoại thất | sơn nội thất ngoại thất khác nhau |
| Bảng giá sơn Jotun mới nhất | bảng giá sơn jotun, giá sơn jotun — **⚠ cập nhật giá + năm trong tiêu đề mỗi khi giá đổi** |
| Sơn lại nhà cũ: các bước và chi phí | sơn lại nhà cũ |
| Xử lý tường bị nấm mốc, bong tróc | tường bị mốc, sơn tường bị bong tróc |
| So sánh các dòng sơn ngoại thất Jotun | jotashield hay tough shield, so sánh sơn jotun |
| Sơn nhà mùa mưa được không | sơn nhà mùa mưa |
| Màu sơn phòng khách đẹp | màu sơn phòng khách |
| Màu sơn phòng ngủ đẹp | màu sơn phòng ngủ |
| Sơn nhà cấp 4 hết bao nhiêu tiền | sơn nhà cấp 4 bao nhiêu tiền, chi phí sơn nhà |
| Kinh nghiệm chọn thợ sơn | thợ sơn nhà, giám sát thi công sơn |
| Sơn chống nóng cho nhà hướng Tây | sơn chống nóng, nhà hướng tây |
| Cách sơn cửa sắt, cổng sắt không bị rỉ | sơn cửa sắt, sơn cổng sắt chống rỉ |
| Màu sơn mặt tiền nhà phố đẹp | màu sơn mặt tiền, màu sơn mặt tiền nhà phố |
| Màu sơn phòng bếp đẹp | màu sơn phòng bếp |
| Sơn nhà trọ, nhà cho thuê tối ưu chi phí | sơn nhà trọ, sơn nhà cho thuê |
| Checklist nghiệm thu sơn nhà | nghiệm thu sơn nhà, kiểm tra sơn nhà |

### Ý tưởng bài tiếp theo (đăng 2–4 bài/tháng)

- Màu sơn phòng thờ / phòng trẻ em (mỗi phòng một bài, tiếp series màu)
- Cách dặm vá tường bị trầy xước, vết bẩn cứng đầu
- Câu chuyện công trình thực tế tại Cần Giuộc/Long Hậu (kèm ảnh trước–sau — dạng bài này rất tốt cho SEO địa phương)

### Quy tắc viết bài chuẩn SEO (áp dụng cho mọi bài)

1. **Một bài = một từ khóa chính**, xuất hiện trong: tiêu đề, `shortDescription`, H2 đầu tiên, và rải tự nhiên trong bài.
2. Tiêu đề dưới 65 ký tự nếu có thể, có con số/lợi ích ("7 bước", "kèm ví dụ").
3. `shortDescription` 140–160 ký tự — đây là mô tả hiện trên Google.
4. Dùng H2/H3 rõ ràng, đoạn ngắn, danh sách gạch đầu dòng.
5. **Luôn có mục FAQ cuối bài** (3 câu hỏi) — dễ được Google lấy làm featured snippet.
6. **Liên kết nội bộ**: mỗi bài link đến ít nhất 2 trang sản phẩm (`/product/...`) và 1–2 bài blog khác.
7. Kết bài luôn có địa chỉ + số điện thoại + lời mời hành động.
8. Ảnh bìa (`coverImage`) là bắt buộc; đặt tên file ảnh có nghĩa, thêm alt text mô tả.

### Cách đăng bài

Vào trang quản trị Outstatic tại `https://jotunlonghau.com/outstatic`, tạo bài trong collection **blogs**. Bài mới tự động xuất hiện ở `/blogs` và trong sitemap sau khi deploy.

## 3. Những gì website đã được cấu hình sẵn (không cần làm lại)

- Sitemap tự động (`/sitemap.xml`) gồm trang chủ, 14 trang sản phẩm, trang màu, giới thiệu và toàn bộ bài blog.
- `robots.txt` chặn Google index trang quản trị `/outstatic`.
- Dữ liệu có cấu trúc (JSON-LD): LocalBusiness (toàn site), Product (trang sản phẩm), BlogPosting + Breadcrumb (bài viết) — giúp Google hiển thị rich results.
- Thẻ meta (title, description, canonical, Open Graph, Twitter card) cho mọi trang — khi share link lên Zalo/Facebook sẽ hiện ảnh + mô tả đẹp.
- Khai báo ngôn ngữ tiếng Việt (`lang="vi"`) cho toàn site.

## 4. Theo dõi hàng tháng

- Search Console: từ khóa tăng/giảm, trang nào được click nhiều.
- Google Business Profile: lượt xem hồ sơ, lượt chỉ đường, cuộc gọi.
- Vercel Analytics (đã cài): trang nào đông khách.
- Mục tiêu gợi ý: mỗi tháng +2 bài evergreen, +5 review Google, trả lời 100% review.
