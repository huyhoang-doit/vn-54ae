import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// CSS để ẩn thanh cuộn
const hideScrollbarStyles = `
  .hide-scrollbar::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  .hide-scrollbar::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

// Thêm styles vào document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = hideScrollbarStyles;
  document.head.appendChild(styleSheet);
}

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
  subItems?: string[];
}

interface ComparisonItem {
  left: string;
  right: string;
  icon?: string;
}

interface Section {
  id: string;
  title: string;
  content: string[];
  image?: string; // Thêm hình ảnh cho section
  subsections?: {
    title: string;
    content: string[];
    image?: string; // Thêm hình ảnh cho subsection
    timeline?: TimelineEvent[];
    comparison?: ComparisonItem[];
    cards?: {
      title: string;
      content: string;
      image?: string;
    }[];
  }[];
}

const sections: Section[] = [
  {
    id: "khai-niem-dan-toc",
    title: "1. Khái niệm, đặc trưng cơ bản của dân tộc",
    content: [],
    image: "/images/img1.png",
    subsections: [
      {
        title: "Khái niệm dân tộc",
        image: "/images/img3.jpg",
        content: [
          "Dân tộc là quá trình phát triển lâu dài của xã hội loài người, trải qua các hình thức cộng đồng từ thấp đến cao.",
          "Ở phương Tây: Dân tộc xuất hiện khi phương thức sản xuất tư bản chủ nghĩa được xác lập thay thế phương thức sản xuất phong kiến.",
          "Ở phương Đông: Dân tộc được hình thành trên cơ sở một nền văn hoá, một tâm lý dân tộc đã phát triển tương đối chín muồi và một cộng đồng kinh tế tuy đã đạt tới một mức độ nhất định song nhìn chung còn kém phát triển và ở trạng thái phân tán.",
        ],
      },
      {
        title: "Hai nghĩa cơ bản của dân tộc",
        image: "/images/img4.jpg",
        content: [],
        cards: [
          {
            title: "Dân tộc (nation) - Quốc gia dân tộc",
            content:
              "Là cộng đồng chính trị - xã hội có những đặc trưng: Có chung phương thức sinh hoạt kinh tế; Có lãnh thổ chung ổn định không bị chia cắt; Có sự quản lý của một nhà nước độc lập; Có ngôn ngữ chung của quốc gia; Có nét tâm lý biểu hiện qua nền văn hóa dân tộc và tạo nên bản sắc riêng.",
            image: "/images/ca1.jpg",
          },
          {
            title: "Dân tộc - tộc người (ethnies)",
            content:
              "Có ba đặc trưng: Cộng đồng về ngôn ngữ (bao gồm ngôn ngữ nói, ngôn ngữ viết; hoặc chỉ riêng ngôn ngữ nói); Cộng đồng về văn hóa; Ý thức tự giác tộc người.",
            image: "/images/ca2.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "chu-nghia-mac-lenin",
    title: "2. Chủ nghĩa Mác - Lênin về vấn đề dân tộc",
    content: [],
    image: "/images/img2.jpg",
    subsections: [
      {
        title: "2.1. Hai xu hướng khách quan của sự phát triển quan hệ dân tộc",
        image: "/images/img1.png",
        content: [
          "Xu hướng thứ nhất: Cộng đồng dân cư muốn tách ra để hình thành cộng đồng dân tộc độc lập.",
          "Xu hướng thứ hai: Các dân tộc trong từng quốc gia, thậm chí các dân tộc ở nhiều quốc gia muốn liên hiệp lại với nhau.",
        ],
      },
      {
        title: "2.2. Cương lĩnh dân tộc của chủ nghĩa Mác - Lênin",
        image: "/images/img2.jpg",
        content: [],
        cards: [
          {
            title: "Một là: Các dân tộc hoàn toàn bình đẳng",
            content:
              "Tất cả các dân tộc đều bình đẳng về quyền và nghĩa vụ, không có sự phân biệt đối xử giữa các dân tộc. Đây là nguyên tắc cơ bản trong quan hệ dân tộc.",
            image: "/images/dt1.jpg",
          },
          {
            title: "Hai là: Các dân tộc được quyền tự quyết",
            content:
              "Mỗi dân tộc có quyền tự quyết định vận mệnh của mình, có quyền tự quyết về chính trị, kinh tế, văn hóa phù hợp với lợi ích và nguyện vọng của dân tộc đó.",
            image: "/images/dt2.jpg",
          },
          {
            title: "Ba là: Liên hiệp công nhân tất cả các dân tộc",
            content:
              "Công nhân và nhân dân lao động của tất cả các dân tộc cần đoàn kết, liên hiệp lại với nhau để đấu tranh chống áp bức, bóc lột, xây dựng xã hội mới.",
            image: "/images/dt3.jpg",
          },
        ],
      },
    ],
  },
  {
    id: "dan-toc-viet-nam",
    title: "3. Dân tộc tại Việt Nam",
    content: [],
    image: "/images/img3.jpg",
    subsections: [
      {
        title: "3.1. 54 dân tộc anh em của Việt Nam",
        image: "/images/img1.png",
        content: [
          "Việt Nam có 54 dân tộc anh em được phân bố theo 8 nhóm ngôn ngữ chính, với vùng sinh sống và ngôn ngữ đặc trưng. Mỗi dân tộc đều có những nét văn hóa, phong tục tập quán riêng, tạo nên bức tranh văn hóa đa dạng, phong phú của đất nước.",
        ],
        cards: [
          {
            title: "Kinh (Việt)",
            content: "📍 Nơi sinh sống: Trên toàn quốc, chiếm đa số\n🗣️ Tiếng nói: Tiếng Việt\n🎭 Tập quán: Văn hóa đô thị, lễ hội truyền thống như Tết Nguyên Đán",
          },
          {
            title: "Tày",
            content: "📍 Nơi sinh sống: Đông Bắc, Tây Bắc\n🗣️ Tiếng nói: Tiếng Tày\n🎭 Tập quán: Lễ hội Lồng Tồng, nghề dệt thổ cẩm",
          },
          {
            title: "Thái",
            content: "📍 Nơi sinh sống: Tây Bắc\n🗣️ Tiếng nói: Tiếng Thái\n🎭 Tập quán: Âm nhạc Xòe, nghề dệt, lễ hội cầu mùa",
          },
          {
            title: "Mường",
            content: "📍 Nơi sinh sống: Tây Bắc (Hòa Bình, Thanh Hóa)\n🗣️ Tiếng nói: Tiếng Mường\n🎭 Tập quán: Tập quán thờ cúng tổ tiên, nghề trồng lúa nước",
          },
          {
            title: "Nùng",
            content: "📍 Nơi sinh sống: Đông Bắc\n🗣️ Tiếng nói: Tiếng Nùng\n🎭 Tập quán: Ẩm thực độc đáo, lễ hội Lồng Tồng",
          },
          {
            title: "H'Mông",
            content: "📍 Nơi sinh sống: Tây Bắc, các tỉnh miền núi phía Bắc\n🗣️ Tiếng nói: Tiếng H'Mông\n🎭 Tập quán: Trang phục thổ cẩm đặc sắc, lễ hội cầu mưa",
          },
          {
            title: "Dao",
            content: "📍 Nơi sinh sống: Tây Bắc\n🗣️ Tiếng nói: Tiếng Dao\n🎭 Tập quán: Tục nhảy lửa, nghề thêu thổ cẩm",
          },
          {
            title: "Khmer",
            content: "📍 Nơi sinh sống: Tây Nam Bộ\n🗣️ Tiếng nói: Tiếng Khmer\n🎭 Tập quán: Lễ hội Chol Chnam Thmay, tín ngưỡng Phật giáo",
          },
          {
            title: "Hoa (Người Trung Quốc)",
            content: "📍 Nơi sinh sống: Khắp nơi, tập trung tại các đô thị lớn\n🗣️ Tiếng nói: Tiếng Hoa\n🎭 Tập quán: Văn hóa thương mại, nghi lễ truyền thống",
          },
          {
            title: "Ê Đê",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng Ê Đê\n🎭 Tập quán: Tín ngưỡng cồng chiêng, nhà dài truyền thống",
          },
          {
            title: "Ba Na",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng Ba Na\n🎭 Tập quán: Lễ hội đâm trâu, nghệ thuật trình diễn dân gian",
          },
          {
            title: "Gia Rai",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng Gia Rai\n🎭 Tập quán: Lễ hội cồng chiêng, chế biến rượu cần",
          },
          {
            title: "Sán Dìu",
            content: "📍 Nơi sinh sống: Tỉnh phía Bắc\n🗣️ Tiếng nói: Tiếng Sán Dìu\n🎭 Tập quán: Lễ tết truyền thống, tín ngưỡng thờ cúng tổ tiên",
          },
          {
            title: "Cơ Ho",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng Cơ Ho\n🎭 Tập quán: Tập quán săn bắn, lễ hội đặc sắc",
          },
          {
            title: "Xơ Đăng",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng Xơ Đăng\n🎭 Tập quán: Lễ hội đâm trâu, sản xuất đồ gỗ",
          },
          {
            title: "H're",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng H're\n🎭 Tập quán: Tín ngưỡng truyền thống, nghề thêu thổ cẩm",
          },
          {
            title: "M'Nông",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng M'Nông\n🎭 Tập quán: Lễ hội truyền thống, nghề trồng cà phê",
          },
          {
            title: "Tà Ôi",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng Tà Ôi\n🎭 Tập quán: Tín ngưỡng thờ cúng, kiến trúc nhà dài",
          },
          {
            title: "Chơ Ro",
            content: "📍 Nơi sinh sống: Nam Bộ\n🗣️ Tiếng nói: Tiếng Chơ Ro\n🎭 Tập quán: Nghề nông, lễ hội độc đáo",
          },
          {
            title: "Ra Glai",
            content: "📍 Nơi sinh sống: Tây Nguyên\n🗣️ Tiếng nói: Tiếng Ra Glai\n🎭 Tập quán: Tín ngưỡng cồng chiêng, phong tục truyền thống",
          },
          {
            title: "Bru - Vân Kiều",
            content: "📍 Nơi sinh sống: Quảng Trị, Quảng Bình\n🗣️ Tiếng nói: Tiếng Bru - Vân Kiều\n🎭 Tập quán: Lễ hội truyền thống, nông nghiệp",
          },
          {
            title: "Thổ",
            content: "📍 Nơi sinh sống: Thanh Hóa\n🗣️ Tiếng nói: Tiếng Thổ\n🎭 Tập quán: Nghề nông, ẩm thực đặc trưng",
          },
          {
            title: "Khơ Mú",
            content: "📍 Nơi sinh sống: Thanh Hóa, Nghệ An\n🗣️ Tiếng nói: Tiếng Khơ Mú\n🎭 Tập quán: Lễ hội truyền thống, nông nghiệp",
          },
          {
            title: "La Ha",
            content: "📍 Nơi sinh sống: Lào Cai\n🗣️ Tiếng nói: Tiếng La Ha\n🎭 Tập quán: Lễ hội và tập quán truyền thống",
          },
          {
            title: "Lự",
            content: "📍 Nơi sinh sống: Lai Châu\n🗣️ Tiếng nói: Tiếng Lự\n🎭 Tập quán: Tín ngưỡng thờ cúng, nghề nông",
          },
          {
            title: "Giáy",
            content: "📍 Nơi sinh sống: Lai Châu, Lào Cai\n🗣️ Tiếng nói: Tiếng Giáy\n🎭 Tập quán: Văn hóa ẩm thực, tín ngưỡng",
          },
          {
            title: "Si La",
            content: "📍 Nơi sinh sống: Lai Châu\n🗣️ Tiếng nói: Tiếng Si La\n🎭 Tập quán: Tập tục truyền thống, lễ hội",
          },
          {
            title: "Pu Péo",
            content: "📍 Nơi sinh sống: Lào Cai\n🗣️ Tiếng nói: Tiếng Pu Péo\n🎭 Tập quán: Nghề nông, ẩm thực đặc trưng",
          },
          {
            title: "Kháng",
            content: "📍 Nơi sinh sống: Sơn La, Điện Biên\n🗣️ Tiếng nói: Tiếng Kháng\n🎭 Tập quán: Văn hóa truyền thống, lễ hội",
          },
          {
            title: "La Chi",
            content: "📍 Nơi sinh sống: Hà Giang\n🗣️ Tiếng nói: Tiếng La Chi\n🎭 Tập quán: Tập quán, lễ hội truyền thống",
          },
          {
            title: "Mảng",
            content: "📍 Nơi sinh sống: Sơn La\n🗣️ Tiếng nói: Tiếng Mảng\n🎭 Tập quán: Tập tục nông nghiệp, tín ngưỡng",
          },
          {
            title: "Cơ Lao",
            content: "📍 Nơi sinh sống: Sơn La, Lai Châu\n🗣️ Tiếng nói: Tiếng Cơ Lao\n🎭 Tập quán: Văn hóa đặc sắc, lễ hội",
          },
          {
            title: "Lô Lô",
            content: "📍 Nơi sinh sống: Hà Giang, Cao Bằng\n🗣️ Tiếng nói: Tiếng Lô Lô\n🎭 Tập quán: Trang phục truyền thống, lễ hội đặc sắc",
          },
          {
            title: "Chứt",
            content: "📍 Nơi sinh sống: Quảng Bình\n🗣️ Tiếng nói: Tiếng Chứt\n🎭 Tập quán: Tập quán thôn bản, nghề săn bắn",
          },
          {
            title: "Pa Cô",
            content: "📍 Nơi sinh sống: Thừa Thiên Huế\n🗣️ Tiếng nói: Tiếng Pa Cô\n🎭 Tập quán: Tín ngưỡng truyền thống, nghề làm nông",
          },
          {
            title: "Cơ Tu",
            content: "📍 Nơi sinh sống: Quảng Nam, Quảng Ngãi\n🗣️ Tiếng nói: Tiếng Cơ Tu\n🎭 Tập quán: Lễ hội truyền thống, sản xuất nông nghiệp",
          },
          {
            title: "Mạ",
            content: "📍 Nơi sinh sống: Lâm Đồng\n🗣️ Tiếng nói: Tiếng Mạ\n🎭 Tập quán: Tập quán và tín ngưỡng đặc trưng",
          },
          {
            title: "Chăm",
            content: "📍 Nơi sinh sống: Ninh Thuận, Bình Thuận\n🗣️ Tiếng nói: Tiếng Chăm\n🎭 Tập quán: Văn hóa Chăm Pa, tín ngưỡng Hindu",
          },
        ],
      },
      {
        title: "3.2. 8 nhóm ngôn ngữ chính",
        image: "/images/img3.jpg",
        content: [],
        timeline: [
          {
            year: "Nhóm 1",
            title: "Nhóm Việt - Mường",
            description: "Bao gồm dân tộc Kinh, Mường, Thổ, Chứt. Họ sinh sống chủ yếu ở đồng bằng và trung du Bắc Bộ, Bắc Trung Bộ. Tiếng nói thuộc ngữ hệ Nam Á, nhóm Việt-Mường.",
            image: "/images/ca1.jpg",
            subItems: [],
          },
          {
            year: "Nhóm 2",
            title: "Nhóm Tày - Thái",
            description: "Gồm các dân tộc Tày, Thái, Nùng, Sán Chay, Sán Dìu... chủ yếu ở các tỉnh vùng Đông Bắc, Tây Bắc. Ngôn ngữ thuộc nhóm Tây Thái của ngữ hệ Tai-Kadai.",
            image: "/images/ca2.jpg",
            subItems: [],
          },
          {
            year: "Nhóm 3",
            title: "Nhóm Mông - Dao",
            description: "Bao gồm dân tộc H'Mông, Dao, Giấy, Cơ Lao, Lô Lô, Mảng... sống chủ yếu vùng núi Tây Bắc như Hà Giang, Lào Cai, Sơn La. Ngôn ngữ thuộc nhóm H'Mông-Miền.",
            image: "/images/ca3.jpg",
            subItems: [],
          },
          {
            year: "Nhóm 4",
            title: "Nhóm Ka Đai",
            description: "Gồm Khơ Mú, Kháng, Mảng, La Ha, Lự... sinh sống ở Tây Bắc và vùng cực Tây tỉnh Nghệ An. Ngôn ngữ nhóm Tai-Kadai.",
            image: "/images/ca4.jpg",
            subItems: [],
          },
          {
            year: "Nhóm 5",
            title: "Nhóm Môn - Khmer",
            description: "Bao gồm Khmer ở Tây Nam Bộ và dân tộc Mường ở miền núi phía Bắc. Ngôn ngữ thuộc nhóm Môn-Khmer của hệ Nam Á.",
            image: "/images/dt1.jpg",
            subItems: [],
          },
          {
            year: "Nhóm 6",
            title: "Nhóm Hán (Hoa)",
            description: "Người Hoa sinh sống tập trung ở các thành phố lớn và khu vực Nam Bộ, nói tiếng Hoa và các phương ngữ khác.",
            image: "/images/dt2.jpg",
            subItems: [],
          },
          {
            year: "Nhóm 7",
            title: "Nhóm Nam Đảo",
            description: "Gồm người Chăm và các dân tộc Raglai, Ê Đê, Ba Na, Gia Rai, Xơ Đăng, M'Nông, Tà Ôi... chủ yếu sống ở Tây Nguyên và Nam Trung Bộ. Ngôn ngữ thuộc nhóm Nam Đảo - Malayo-Polynesian.",
            image: "/images/dt3.jpg",
            subItems: [],
          },
          {
            year: "Nhóm 8",
            title: "Nhóm Tạng - Miến",
            description: "Gồm người Tày, Nùng, Lô Lô, La Chi sống ở vùng núi cao phía Bắc như Hà Giang, Lào Cai, Cao Bằng. Ngôn ngữ thuộc nhóm Tạng Miến trong hệ ngôn ngữ Nam Á.",
            image: "/images/dt4.jpg",
            subItems: [],
          },
        ],
      },
      {
        title: "3.3. Tổng kết",
        image: "/images/img4.jpg",
        content: [
          "54 dân tộc Việt Nam trải rộng từ đồng bằng miền Bắc, Tây Bắc, Tây Nguyên đến đồng bằng sông Cửu Long, mỗi dân tộc có ngôn ngữ và vùng cư trú đặc thù, tạo nên sự đa dạng văn hóa phong phú của đất nước.",
          "Sự đa dạng này là nguồn sức mạnh, là tài sản quý giá của dân tộc Việt Nam, góp phần làm phong phú nền văn hóa dân tộc và tạo nên bản sắc riêng của đất nước.",
        ],
      },
    ],
  },
  {
    id: "chinh-sach-dan-toc",
    title: "4. Trả lời và tìm hiểu câu hỏi QC",
    content: [],
    image: "/images/img4.jpg",
    subsections: [
      {
        title: "4.1. Câu hỏi nghiên cứu",
        image: "/images/img1.png",
        content: [
          "CQ: Ở Việt Nam, dân tộc Kinh (Việt) chiếm đa số, có nhiều học giả cho rằng người Kinh đã chiếm dụng văn hóa, kinh tế và chính trị của các dân tộc khác. Hãy tìm hiểu đặc điểm dân tộc và chính sách dân tộc của Nhà nước ta và giải thích vấn đề đó.",
        ],
      },
      {
        title: '4.2. "Người Kinh chiếm dụng" văn hóa, kinh tế, và chính trị của các dân tộc khác?',
        image: "/images/img3.jpg",
        content: [],
        cards: [
          {
            title: "Tồn tại sự chênh lệch khách quan",
            content:
              "Có sự chênh lệch thực tế về dân số (người Kinh chiếm 85,7%) và trình độ phát triển không đồng đều giữa các dân tộc, vốn là hậu quả của quá trình phát triển lịch sử.",
          },
          {
            title: "Chủ trương của Nhà nước là bình đẳng, tương trợ",
            content:
              "Chính sách dân tộc của Việt Nam được xây dựng trên nguyên tắc \"bình đẳng, đoàn kết, tương trợ, giúp nhau cùng phát triển\".",
          },
        ],
      },
      {
        title: '4.3. Mục tiêu là khắc phục chênh lệch, không phải "chiếm dụng"',
        image: "/images/img4.jpg",
        content: [],
        cards: [
          {
            title: "Kinh tế",
            content:
              "Nhà nước \"ưu tiên đầu tư phát triển kinh tế - xã hội các vùng dân tộc và miền núi\" nhằm \"từng bước khắc phục khoảng cách chênh lệch\".",
          },
          {
            title: "Văn hóa",
            content:
              "Chính sách hướng đến \"Giữ gìn và phát huy giá trị văn hóa truyền thống của các tộc người\", xây dựng nền văn hóa \"thống nhất trong đa dạng\", chứ không phải đồng hóa.",
          },
          {
            title: "Chính trị",
            content:
              "Nhà nước \"chăm lo xây dựng đội ngũ cán bộ dân tộc thiểu số\" để tăng cường sự tham gia của họ vào hệ thống chính trị.",
          },
        ],
      },
      {
        title: '4.4. "Vậy tại sao vẫn tồn tại quan điểm về sự chiếm dụng?"',
        image: "/images/img2.jpg",
        content: [],
        cards: [
          {
            title: "Do chênh lệch lịch sử",
            content:
              "Có sự chênh lệch thực tế về trình độ phát triển, dân số (người Kinh chiếm đa số) và việc nắm giữ các nguồn lực kinh tế, chính trị. Đây là thực tế khách quan dễ dẫn đến nhận thức về sự \"áp đảo\".",
          },
          {
            title: "Do hạn chế trong thực thi chính sách",
            content:
              "Dù chính sách của Nhà nước là đúng đắn (như ưu tiên, hỗ trợ), việc thực thi yếu kém, máy móc ở các cấp có thể vô tình làm mai một bản sắc văn hóa địa phương, gây hiểu lầm về sự \"đồng hóa\".",
          },
          {
            title: "Do sự chống phá của thế lực thù địch",
            content:
              "Các thế lực này thường xuyên \"lợi dụng vấn đề dân tộc\" để kích động, chia rẽ và phá hoại khối đại đoàn kết dân tộc. Việc lan truyền luận điệu \"người Kinh chiếm dụng\" là một trong những chiến thuật của họ.",
          },
        ],
      },
      {
        title: "4.5. Kết luận",
        image: "/images/img1.png",
        content: [
          "Sự chênh lệch về kinh tế và chính trị giữa dân tộc Kinh và các dân tộc thiểu số là một thực tế lịch sử khách quan. Tuy nhiên, quan điểm cho rằng đây là kết quả của sự \"chiếm dụng\" là không có cơ sở và đi ngược lại chính sách dân tộc của Nhà nước Việt Nam.",
          "Chủ trương nhất quán của Việt Nam là đoàn kết, bình đẳng, tương trợ để khắc phục sự chênh lệch lịch sử thông qua các chính sách cụ thể như ưu tiên đầu tư, phát triển cán bộ dân tộc thiểu số và bảo tồn bản sắc văn hóa. Các luận điểm về \"chiếm dụng\" hay \"chia rẽ\" đều bị xem là âm mưu phá hoại khối đại đoàn kết dân tộc.",
        ],
      },
    ],
  },
];

const ContentSection = () => {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set()
  );
  const [selectedSubsection, setSelectedSubsection] = useState<{
    sectionId: string;
    subsectionIndex: number;
  } | null>(null);

  // Lock page scrolling when any section is expanded (fullscreen overlay open)
  useEffect(() => {
    const hasOpen = expandedSections.size > 0 || selectedSubsection !== null;
    const prev = document.body.style.overflow;
    if (hasOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = prev || "";
    }
    return () => {
      // restore when component unmounts
      document.body.style.overflow = prev || "";
    };
  }, [expandedSections, selectedSubsection]);

  const toggleSection = (sectionId: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };

  const openSubsectionModal = (sectionId: string, subsectionIndex: number) => {
    setSelectedSubsection({ sectionId, subsectionIndex });
  };

  const closeSubsectionModal = () => {
    setSelectedSubsection(null);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #ecf0f1 0%, #d5dbdb 100%)",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        {/* Section List */}
        {sections.map((section) => (
          <motion.div
            id={section.id}
            key={section.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            style={{
              backgroundColor: "white",
              borderRadius: "8px",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              overflow: "hidden",
              borderLeft: "4px solid #3498db",
              transition: "box-shadow 0.2s",
              scrollMarginTop: "80px",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 10px 15px rgba(0, 0, 0, 0.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)")
            }
          >
            {/* Header with image */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "24px",
                padding: "24px",
                cursor: "pointer",
                backgroundColor: expandedSections.has(section.id)
                  ? "#f8f8f8"
                  : "white",
                borderBottom: "1px solid #eee",
              }}
              onClick={() => toggleSection(section.id)}
            >
              <div style={{ flex: 1 }}>
                <h2
                  style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "#3498db",
                    margin: 0,
                    marginBottom: "8px",
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "#666",
                    margin: 0,
                  }}
                >
                  Bấm để{" "}
                  {expandedSections.has(section.id)
                    ? "thu gọn"
                    : "xem chi tiết"}
                </p>
              </div>
              {section.image && (
                <div style={{ width: "120px", height: "80px", flexShrink: 0 }}>
                  <img
                    src={section.image}
                    alt={section.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px",
                      boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                    }}
                  />
                </div>
              )}
              <div
                style={{
                  fontSize: "24px",
                  color: "#3498db",
                  transform: expandedSections.has(section.id)
                    ? "rotate(180deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                ▼
              </div>
            </div>
          </motion.div>
        ))}

        {/* Fullscreen Expandable Content */}
        {sections.map((section) => (
          <AnimatePresence key={`fullscreen-${section.id}`}>
            {expandedSections.has(section.id) && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  zIndex: 1000,
                  overflowY: "auto",
                }}
              >
                {/* Full-width overlay header (improved title) */}
                <motion.div
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1001,
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0.98), rgba(255,255,255,0.95))",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                    padding: "18px 24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "12px",
                    backdropFilter: "saturate(1.1) blur(6px)",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <h2
                      style={{
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "#3498db",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {section.title}
                    </h2>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                    }}
                  >
                    <button
                      aria-label="Close section"
                      onClick={() => toggleSection(section.id)}
                      style={{
                        background: "#3498db",
                        color: "#fff",
                        border: "none",
                        padding: "8px 12px",
                        borderRadius: "6px",
                        cursor: "pointer",
                        fontWeight: 600,
                      }}
                    >
                      X
                    </button>
                  </div>
                </motion.div>

                {/* Background Content - make overlay content the only scrollable area */}
                <div
                  style={{
                    position: "fixed",
                    inset: 0,
                    zIndex: 1000,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    background: "rgba(0,0,0,0.25)",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "1200px",
                      height: "100vh",
                      overflow: "auto",
                      scrollBehavior: "smooth",
                      backgroundImage:
                        section.id === "transition-socialism"
                          ? "url(/images/bg-transition.svg)"
                          : section.id === "characteristics"
                          ? "url(/images/bg-characteristics.svg)"
                          : "none",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      paddingTop: "80px",
                      paddingLeft: "20px",
                      paddingRight: "20px",
                      paddingBottom: "40px",
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                    className="hide-scrollbar"
                  >
                    <div
                      style={{
                        maxWidth: "1200px",
                        margin: "0 auto",
                      }}
                    >
                      {section.content.length > 0 && (
                        <ul
                          style={{
                            listStyleType: "disc",
                            listStylePosition: "inside",
                            marginBottom: "24px",
                          }}
                        >
                          {section.content.map((item, index) => (
                            <li
                              key={index}
                              style={{
                                color: "#555",
                                marginBottom: "8px",
                                lineHeight: "1.6",
                              }}
                            >
                              {item}
                            </li>
                          ))}
                        </ul>
                      )}

                      {/* Subsections for characteristics section */}
                      {section.subsections &&
                        section.id === "characteristics" && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "32px",
                            }}
                          >
                            <div
                              style={{
                                display: "grid",
                                gridTemplateColumns:
                                  "repeat(auto-fit, minmax(400px, 1fr))",
                                gap: "32px",
                                marginBottom: "32px",
                              }}
                            >
                              {section.subsections.map((subsection, index) => {
                                const cardStyles = [
                                  {
                                    bg: "url(/images/img1.png)",
                                    light: "rgba(102, 126, 234, 0.1)",
                                    bgColor: "#667eea",
                                  },
                                  {
                                    bg: "url(/images/img2.jpg)",
                                    light: "rgba(240, 147, 251, 0.1)",
                                    bgColor: "#f093fb",
                                  },
                                ];
                                const cardStyle =
                                  cardStyles[index % cardStyles.length];

                                return (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    transition={{
                                      delay: index * 0.2,
                                      duration: 0.6,
                                      ease: [0.25, 0.1, 0.25, 1],
                                    }}
                                    whileHover={{
                                      scale: 1.05,
                                      y: -8,
                                      boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                                    }}
                                    onClick={() =>
                                      openSubsectionModal(section.id, index)
                                    }
                                    style={{
                                      background: "white",
                                      borderRadius: "16px",
                                      overflow: "hidden",
                                      boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
                                      cursor: "pointer",
                                      transition:
                                        "all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)",
                                      border: "2px solid rgba(0,0,0,0.05)",
                                      position: "relative",
                                      marginTop: "200px",
                                    }}
                                  >
                                    {/* Image header */}
                                    <div
                                      style={{
                                        backgroundImage: cardStyle.bg,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                        backgroundColor: cardStyle.bgColor,
                                        height: "200px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        position: "relative",
                                        overflow: "hidden",
                                      }}
                                    >
                                      {/* Overlay for better text visibility */}
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: 0,
                                          left: 0,
                                          right: 0,
                                          bottom: 0,
                                          backgroundColor: "rgba(0,0,0,0.4)",
                                          zIndex: 0,
                                        }}
                                      ></div>
                                      <div
                                        style={{
                                          textAlign: "center",
                                          color: "white",
                                          zIndex: 1,
                                          position: "relative",
                                        }}
                                      ></div>
                                    </div>

                                    {/* Content */}
                                    <div
                                      style={{
                                        padding: "32px",
                                        background: cardStyle.light,
                                        minHeight: "240px",
                                        display: "flex",
                                        flexDirection: "column",
                                      }}
                                    >
                                      <h3
                                        style={{
                                          fontSize: "22px",
                                          fontWeight: "bold",
                                          color: "#333",
                                          marginBottom: "16px",
                                          lineHeight: "1.4",
                                        }}
                                      >
                                        {subsection.title}
                                      </h3>

                                      {/* Content items count */}
                                      <div
                                        style={{
                                          display: "flex",
                                          gap: "16px",
                                          marginBottom: "24px",
                                          flexWrap: "wrap",
                                        }}
                                      >
                                        {subsection.content &&
                                          subsection.content.length > 0 && (
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                padding: "8px 16px",
                                                backgroundColor: "white",
                                                borderRadius: "20px",
                                                boxShadow:
                                                  "0 2px 8px rgba(0,0,0,0.05)",
                                              }}
                                            >
                                              <span
                                                style={{ fontSize: "18px" }}
                                              >
                                                📋
                                              </span>
                                              <span
                                                style={{
                                                  fontWeight: "bold",
                                                  color: "#333",
                                                }}
                                              >
                                                {subsection.content.length} nội
                                                dung chính
                                              </span>
                                            </div>
                                          )}
                                        {subsection.cards &&
                                          subsection.cards.length > 0 && (
                                            <div
                                              style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                                padding: "8px 16px",
                                                backgroundColor: "white",
                                                borderRadius: "20px",
                                                boxShadow:
                                                  "0 2px 8px rgba(0,0,0,0.05)",
                                              }}
                                            >
                                              <span
                                                style={{ fontSize: "18px" }}
                                              >
                                                🎯
                                              </span>
                                              <span
                                                style={{
                                                  fontWeight: "bold",
                                                  color: "#333",
                                                }}
                                              >
                                                {subsection.cards.length} nội
                                                dung chi tiết
                                              </span>
                                            </div>
                                          )}
                                      </div>

                                      {/* Description preview */}
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          color: "#666",
                                          lineHeight: "1.6",
                                          flex: 1,
                                          marginBottom: "24px",
                                        }}
                                      >
                                        {subsection.content &&
                                        subsection.content[0]
                                          ? subsection.content[0].substring(
                                              0,
                                              100
                                            ) + "..."
                                          : "Nhấp để xem chi tiết"}
                                      </p>

                                      {/* Click to view */}
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          color: "#3498db",
                                          fontWeight: "bold",
                                          fontSize: "14px",
                                        }}
                                      >
                                        <span>👉 Nhấp để xem chi tiết</span>
                                        <span style={{ fontSize: "16px" }}>
                                          →
                                        </span>
                                      </div>
                                    </div>
                                  </motion.div>
                                );
                              })}
                            </div>
                          </div>
                        )}

                      {/* Render subsections based on section type */}
                      {section.subsections &&
                        section.id !== "characteristics" && (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "40px",
                            }}
                          >
                            {section.subsections.map((subsection, index) => {
                              // Section 1: Khái niệm dân tộc - List style với icon
                              if (section.id === "khai-niem-dan-toc") {
                                return (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -30 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: index * 0.15,
                                      duration: 0.6,
                                    }}
                                    style={{
                                      background: "white",
                                      borderRadius: "0",
                                      borderLeft: "6px solid #3498db",
                                      padding: "32px",
                                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                                      position: "relative",
                                    }}
                                  >
                                    <h3
                                      style={{
                                        fontSize: "22px",
                                        fontWeight: "700",
                                        color: "#2c3e50",
                                        marginBottom: "24px",
                                        paddingBottom: "16px",
                                        borderBottom: "2px solid #ecf0f1",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "28px",
                                          background:
                                            "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                          WebkitBackgroundClip: "text",
                                          WebkitTextFillColor: "transparent",
                                        }}
                                      >
                                        {index === 0 ? "📖" : "🔍"}
                                      </span>
                                      {subsection.title}
                                    </h3>

                                    {subsection.content.length > 0 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "16px",
                                        }}
                                      >
                                        {subsection.content.map(
                                          (item, itemIndex) => (
                                            <div
                                              key={itemIndex}
                                              style={{
                                                display: "flex",
                                                gap: "16px",
                                                padding: "16px",
                                                background:
                                                  "linear-gradient(90deg, rgba(52, 152, 219, 0.05) 0%, transparent 100%)",
                                                borderRadius: "8px",
                                                borderLeft: "4px solid #3498db",
                                              }}
                                            >
                                              <div
                                                style={{
                                                  minWidth: "32px",
                                                  height: "32px",
                                                  borderRadius: "50%",
                                                  background:
                                                    "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  color: "white",
                                                  fontWeight: "bold",
                                                  fontSize: "14px",
                                                }}
                                              >
                                                {itemIndex + 1}
                                              </div>
                                              <p
                                                style={{
                                                  margin: 0,
                                                  color: "#34495e",
                                                  lineHeight: "1.8",
                                                  fontSize: "15px",
                                                  flex: 1,
                                                }}
                                              >
                                                {item}
                                              </p>
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )}

                                    {subsection.cards && (
                                      <div
                                        style={{
                                          marginTop: "32px",
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "20px",
                                        }}
                                      >
                                        {subsection.cards.map((card, idx) => (
                                          <div
                                            key={idx}
                                            style={{
                                              padding: "24px",
                                              background:
                                                idx % 2 === 0
                                                  ? "linear-gradient(135deg, rgba(52, 152, 219, 0.08) 0%, rgba(46, 204, 113, 0.05) 100%)"
                                                  : "linear-gradient(135deg, rgba(231, 76, 60, 0.08) 0%, rgba(52, 152, 219, 0.05) 100%)",
                                              borderRadius: "12px",
                                              border: "2px solid",
                                              borderColor:
                                                idx % 2 === 0
                                                  ? "rgba(52, 152, 219, 0.2)"
                                                  : "rgba(231, 76, 60, 0.2)",
                                              position: "relative",
                                            }}
                                          >
                                            <h4
                                              style={{
                                                fontSize: "18px",
                                                fontWeight: "700",
                                                color:
                                                  idx % 2 === 0
                                                    ? "#3498db"
                                                    : "#e74c3c",
                                                marginBottom: "12px",
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "8px",
                                              }}
                                            >
                                              <span>
                                                {idx === 0 ? "🌍" : "👥"}
                                              </span>
                                              {card.title}
                                            </h4>
                                            <p
                                              style={{
                                                color: "#555",
                                                lineHeight: "1.8",
                                                fontSize: "14px",
                                                margin: 0,
                                              }}
                                            >
                                              {card.content}
                                            </p>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </motion.div>
                                );
                              }

                              // Section 2: Chủ nghĩa Mác-Lênin - Numbered steps
                              if (section.id === "chu-nghia-mac-lenin") {
                                return (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      delay: index * 0.15,
                                      duration: 0.6,
                                    }}
                                    style={{
                                      background: "white",
                                      borderRadius: "16px",
                                      padding: "32px",
                                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      position: "relative",
                                      overflow: "hidden",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        height: "6px",
                                        background:
                                          "linear-gradient(90deg, #3498db 0%, #2ecc71 50%, #e74c3c 100%)",
                                      }}
                                    />
                                    <h3
                                      style={{
                                        fontSize: "22px",
                                        fontWeight: "700",
                                        color: "#2c3e50",
                                        marginBottom: "24px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          width: "40px",
                                          height: "40px",
                                          borderRadius: "50%",
                                          background:
                                            "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          color: "white",
                                          fontWeight: "bold",
                                          fontSize: "18px",
                                        }}
                                      >
                                        {index + 1}
                                      </span>
                                      {subsection.title}
                                    </h3>

                                    {subsection.content.length > 0 && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "12px",
                                          marginBottom: "24px",
                                        }}
                                      >
                                        {subsection.content.map(
                                          (item, itemIndex) => (
                                            <div
                                              key={itemIndex}
                                              style={{
                                                padding: "16px 20px",
                                                background: "#f8f9fa",
                                                borderRadius: "8px",
                                                borderLeft: "4px solid #2ecc71",
                                                fontSize: "15px",
                                                lineHeight: "1.7",
                                                color: "#34495e",
                                              }}
                                            >
                                              {item}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )}

                                    {subsection.cards && (
                                      <div
                                        style={{
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "16px",
                                        }}
                                      >
                                        {subsection.cards.map((card, idx) => (
                                          <div
                                            key={idx}
                                            style={{
                                              padding: "20px 24px",
                                              background:
                                                "linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)",
                                              borderRadius: "10px",
                                              border: "1px solid rgba(52, 152, 219, 0.3)",
                                              display: "flex",
                                              gap: "16px",
                                              alignItems: "flex-start",
                                            }}
                                          >
                                            <div
                                              style={{
                                                minWidth: "48px",
                                                width: "48px",
                                                height: "48px",
                                                borderRadius: "12px",
                                                background:
                                                  "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "20px",
                                                flexShrink: 0,
                                              }}
                                            >
                                              {idx === 0
                                                ? "1"
                                                : idx === 1
                                                ? "2"
                                                : "3"}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                              <h4
                                                style={{
                                                  fontSize: "17px",
                                                  fontWeight: "700",
                                                  color: "#2c3e50",
                                                  marginBottom: "8px",
                                                }}
                                              >
                                                {card.title}
                                              </h4>
                                              <p
                                                style={{
                                                  color: "#555",
                                                  lineHeight: "1.7",
                                                  fontSize: "14px",
                                                  margin: 0,
                                                }}
                                              >
                                                {card.content}
                                              </p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </motion.div>
                                );
                              }

                              // Section 3: 54 dân tộc - Compact table-like hoặc grid đặc biệt
                              if (section.id === "dan-toc-viet-nam") {
                                // Subsection 3.1: 54 dân tộc - Compact list style
                                if (subsection.title.includes("54 dân tộc")) {
                                  return (
                                    <motion.div
                                      key={index}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                      }}
                                      style={{
                                        background: "white",
                                        borderRadius: "12px",
                                        padding: "32px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      }}
                                    >
                                      <h3
                                        style={{
                                          fontSize: "24px",
                                          fontWeight: "700",
                                          color: "#2c3e50",
                                          marginBottom: "24px",
                                          textAlign: "center",
                                          paddingBottom: "16px",
                                          borderBottom: "3px solid #3498db",
                                        }}
                                      >
                                        {subsection.title}
                                      </h3>
                                      {subsection.content.length > 0 && (
                                        <p
                                          style={{
                                            fontSize: "16px",
                                            color: "#555",
                                            lineHeight: "1.8",
                                            marginBottom: "32px",
                                            textAlign: "center",
                                            padding: "16px",
                                            background:
                                              "linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)",
                                            borderRadius: "8px",
                                          }}
                                        >
                                          {subsection.content[0]}
                                        </p>
                                      )}
                                      {subsection.cards && (
                                        <div
                                          style={{
                                            display: "grid",
                                            gridTemplateColumns:
                                              "repeat(auto-fill, minmax(280px, 1fr))",
                                            gap: "16px",
                                          }}
                                        >
                                          {subsection.cards.map((card, idx) => (
                                            <div
                                              key={idx}
                                              style={{
                                                padding: "20px",
                                                background:
                                                  "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(52, 152, 219, 0.05) 100%)",
                                                borderRadius: "10px",
                                                border: "2px solid",
                                                borderColor:
                                                  idx % 3 === 0
                                                    ? "rgba(52, 152, 219, 0.3)"
                                                    : idx % 3 === 1
                                                    ? "rgba(46, 204, 113, 0.3)"
                                                    : "rgba(231, 76, 60, 0.3)",
                                                transition: "all 0.3s",
                                              }}
                                              onMouseEnter={(e) => {
                                                e.currentTarget.style.transform =
                                                  "translateY(-4px)";
                                                e.currentTarget.style.boxShadow =
                                                  "0 8px 20px rgba(0,0,0,0.15)";
                                              }}
                                              onMouseLeave={(e) => {
                                                e.currentTarget.style.transform =
                                                  "translateY(0)";
                                                e.currentTarget.style.boxShadow =
                                                  "none";
                                              }}
                                            >
                                              <h4
                                                style={{
                                                  fontSize: "16px",
                                                  fontWeight: "700",
                                                  color: "#2c3e50",
                                                  marginBottom: "12px",
                                                  paddingBottom: "8px",
                                                  borderBottom: "2px solid",
                                                  borderColor:
                                                    idx % 3 === 0
                                                      ? "rgba(52, 152, 219, 0.3)"
                                                      : idx % 3 === 1
                                                      ? "rgba(46, 204, 113, 0.3)"
                                                      : "rgba(231, 76, 60, 0.3)",
                                                }}
                                              >
                                                {card.title}
                                              </h4>
                                              <p
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#555",
                                                  lineHeight: "1.8",
                                                  whiteSpace: "pre-line",
                                                  margin: 0,
                                                }}
                                              >
                                                {card.content}
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </motion.div>
                                  );
                                }
                                // Subsection 3.2: Timeline (giữ nguyên)
                                if (subsection.timeline) {
                                  return (
                                    <motion.div
                                      key={index}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                      }}
                                      style={{
                                        background: "white",
                                        borderRadius: "12px",
                                        padding: "32px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      }}
                                    >
                                      <h3
                                        style={{
                                          fontSize: "22px",
                                          fontWeight: "700",
                                          color: "#2c3e50",
                                          marginBottom: "32px",
                                          textAlign: "center",
                                        }}
                                      >
                                        {subsection.title}
                                      </h3>
                                      {/* Timeline rendering - giữ nguyên logic timeline */}
                                      {subsection.timeline && (
                                        <div
                                          style={{
                                        marginTop: "32px",
                                        paddingTop: "32px",
                                        borderTop: "2px dashed #ddd",
                                      }}
                                    >
                                     

                                      <div
                                        style={{
                                          position: "relative",
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "48px",
                                          marginLeft: "32px",
                                          paddingLeft: "32px",
                                        }}
                                      >
                                        {/* Main timeline line */}
                                        <div
                                          style={{
                                            position: "absolute",
                                            left: "16px",
                                            top: "24px",
                                            bottom: "24px",
                                            width: "4px",
                                            background:
                                              "linear-gradient(to bottom, #3498db 0%, #2ecc71 50%, #e74c3c 100%)",
                                            borderRadius: "2px",
                                          }}
                                        ></div>

                                        {subsection.timeline.map(
                                          (event, idx) => (
                                            <motion.div
                                              key={idx}
                                              initial={{ opacity: 0, x: -30 }}
                                              animate={{ opacity: 1, x: 0 }}
                                              transition={{
                                                delay: idx * 0.3,
                                                duration: 0.6,
                                              }}
                                              style={{
                                                position: "relative",
                                                marginLeft: "24px",
                                              }}
                                            >
                                              {/* Timeline node */}
                                              <div
                                                style={{
                                                  position: "absolute",
                                                  left: "-56px",
                                                  top: "16px",
                                                  width: "32px",
                                                  height: "32px",
                                                  borderRadius: "50%",
                                                  background:
                                                    "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                                  display: "flex",
                                                  alignItems: "center",
                                                  justifyContent: "center",
                                                  color: "white",
                                                  fontWeight: "bold",
                                                  fontSize: "14px",
                                                  boxShadow:
                                                    "0 4px 12px rgba(211, 47, 47, 0.4)",
                                                  border: "4px solid white",
                                                  zIndex: 2,
                                                }}
                                              >
                                                {idx + 1}
                                              </div>

                                              {/* Timeline card */}
                                              <motion.div
                                                whileHover={{
                                                  scale: 1.02,
                                                  boxShadow:
                                                    "0 12px 30px rgba(211, 47, 47, 0.2)",
                                                }}
                                                style={{
                                                  background:
                                                    "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(211, 47, 47, 0.02) 100%)",
                                                  borderRadius: "16px",
                                                  padding: "24px",
                                                  boxShadow:
                                                    "0 6px 20px rgba(211, 47, 47, 0.15)",
                                                  border:
                                                    "2px solid rgba(211, 47, 47, 0.1)",
                                                  cursor: "pointer",
                                                  transition: "all 0.3s ease",
                                                  backdropFilter: "blur(10px)",
                                                }}
                                              >
                                                {/* Header */}
                                                <div
                                                  style={{
                                                    marginBottom: "16px",
                                                  }}
                                                >
                                                  <div
                                                    style={{
                                                      display: "inline-block",
                                                      background:
                                                        "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                                      color: "white",
                                                      padding: "6px 12px",
                                                      borderRadius: "20px",
                                                      fontSize: "12px",
                                                      fontWeight: "bold",
                                                      marginBottom: "8px",
                                                    }}
                                                  >
                                                    {event.year}
                                                  </div>
                                                  <h5
                                                    style={{
                                                      fontSize: "20px",
                                                      fontWeight: "bold",
                                                      color: "#3498db",
                                                      margin: "8px 0",
                                                      lineHeight: "1.3",
                                                    }}
                                                  >
                                                    {event.title}
                                                  </h5>
                                                  <p
                                                    style={{
                                                      fontSize: "14px",
                                                      color: "#666",
                                                      margin: "0 0 16px 0",
                                                      lineHeight: "1.5",
                                                    }}
                                                  >
                                                    {event.description}
                                                  </p>
                                                </div>

                                                {/* Sub items */}
                                                {event.subItems && (
                                                  <div
                                                    style={{
                                                      display: "grid",
                                                      gridTemplateColumns:
                                                        "repeat(auto-fit, minmax(300px, 1fr))",
                                                      gap: "12px",
                                                      marginTop: "16px",
                                                    }}
                                                  >
                                                    {event.subItems.map(
                                                      (subItem, subIdx) => (
                                                        <motion.div
                                                          key={subIdx}
                                                          initial={{
                                                            opacity: 0,
                                                            y: 10,
                                                          }}
                                                          animate={{
                                                            opacity: 1,
                                                            y: 0,
                                                          }}
                                                          transition={{
                                                            delay:
                                                              idx * 0.3 +
                                                              subIdx * 0.1,
                                                            duration: 0.4,
                                                          }}
                                                          whileHover={{
                                                            scale: 1.02,
                                                          }}
                                                          style={{
                                                            background: "white",
                                                            padding:
                                                              "12px 16px",
                                                            borderRadius: "8px",
                                                            border:
                                                              "1px solid rgba(211, 47, 47, 0.1)",
                                                            boxShadow:
                                                              "0 2px 8px rgba(0,0,0,0.05)",
                                                            transition:
                                                              "all 0.2s ease",
                                                            position:
                                                              "relative",
                                                            paddingLeft: "32px",
                                                          }}
                                                        >
                                                          <span
                                                            style={{
                                                              position:
                                                                "absolute",
                                                              left: "12px",
                                                              top: "14px",
                                                              width: "6px",
                                                              height: "6px",
                                                              backgroundColor:
                                                                "#3498db",
                                                              borderRadius:
                                                                "50%",
                                                            }}
                                                          ></span>
                                                          <span
                                                            style={{
                                                              fontSize: "13px",
                                                              color: "#555",
                                                              lineHeight: "1.4",
                                                            }}
                                                          >
                                                            {subItem}
                                                          </span>
                                                        </motion.div>
                                                      )
                                                    )}
                                                  </div>
                                                )}
                                              </motion.div>
                                            </motion.div>
                                          )
                                        )}
                                      </div>
                                    </div>
                                  )}
                                    </motion.div>
                                  );
                                }
                                // Subsection 3.3: Tổng kết - Quote style
                                if (subsection.title.includes("Tổng kết")) {
                                  return (
                                    <motion.div
                                      key={index}
                                      initial={{ opacity: 0, scale: 0.95 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{
                                        delay: index * 0.1,
                                        duration: 0.6,
                                      }}
                                      style={{
                                        background:
                                          "linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)",
                                        borderRadius: "16px",
                                        padding: "40px",
                                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                        border: "3px solid #3498db",
                                        position: "relative",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div
                                        style={{
                                          position: "absolute",
                                          top: "-50px",
                                          right: "-50px",
                                          width: "200px",
                                          height: "200px",
                                          borderRadius: "50%",
                                          background:
                                            "linear-gradient(135deg, rgba(52, 152, 219, 0.1) 0%, rgba(46, 204, 113, 0.1) 100%)",
                                        }}
                                      />
                                      <h3
                                        style={{
                                          fontSize: "24px",
                                          fontWeight: "700",
                                          color: "#2c3e50",
                                          marginBottom: "24px",
                                          textAlign: "center",
                                          position: "relative",
                                          zIndex: 1,
                                        }}
                                      >
                                        {subsection.title}
                                      </h3>
                                      {subsection.content.length > 0 && (
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "20px",
                                            position: "relative",
                                            zIndex: 1,
                                          }}
                                        >
                                          {subsection.content.map(
                                            (item, itemIndex) => (
                                              <div
                                                key={itemIndex}
                                                style={{
                                                  padding: "24px",
                                                  background: "white",
                                                  borderRadius: "12px",
                                                  fontSize: "16px",
                                                  lineHeight: "1.8",
                                                  color: "#34495e",
                                                  borderLeft: "5px solid #2ecc71",
                                                  boxShadow:
                                                    "0 2px 8px rgba(0,0,0,0.08)",
                                                }}
                                              >
                                                {item}
                                              </div>
                                            )
                                          )}
                                        </div>
                                      )}
                                    </motion.div>
                                  );
                                }
                                // Default fallback cho các subsection khác của Section 3
                                return null;
                              }

                              // Section 4: Chính sách dân tộc - Step-by-step với icon
                              if (section.id === "chinh-sach-dan-toc") {
                                return (
                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                      delay: index * 0.15,
                                      duration: 0.6,
                                    }}
                                    style={{
                                      background: "white",
                                      borderRadius: "16px",
                                      padding: "32px",
                                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                      border: "2px solid",
                                      borderColor:
                                        index === 0
                                          ? "rgba(52, 152, 219, 0.3)"
                                          : index === 1
                                          ? "rgba(46, 204, 113, 0.3)"
                                          : index === 2
                                          ? "rgba(231, 76, 60, 0.3)"
                                          : index === 3
                                          ? "rgba(155, 89, 182, 0.3)"
                                          : "rgba(241, 196, 15, 0.3)",
                                      position: "relative",
                                    }}
                                  >
                                    <div
                                      style={{
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "6px",
                                        height: "100%",
                                        background:
                                          index === 0
                                            ? "linear-gradient(180deg, #3498db 0%, #2ecc71 100%)"
                                            : index === 1
                                            ? "linear-gradient(180deg, #2ecc71 0%, #e74c3c 100%)"
                                            : index === 2
                                            ? "linear-gradient(180deg, #e74c3c 0%, #9b59b6 100%)"
                                            : index === 3
                                            ? "linear-gradient(180deg, #9b59b6 0%, #f1c40f 100%)"
                                            : "linear-gradient(180deg, #f1c40f 0%, #3498db 100%)",
                                        borderRadius: "0 8px 8px 0",
                                      }}
                                    />
                                    <h3
                                      style={{
                                        fontSize: "22px",
                                        fontWeight: "700",
                                        color: "#2c3e50",
                                        marginBottom: "20px",
                                        paddingLeft: "20px",
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "12px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "32px",
                                        }}
                                      >
                                        {index === 0
                                          ? "❓"
                                          : index === 1
                                          ? "👥"
                                          : index === 2
                                          ? "⚖️"
                                          : index === 3
                                          ? "💡"
                                          : "✅"}
                                      </span>
                                      {subsection.title}
                                    </h3>

                                    {subsection.content.length > 0 && (
                                      <div
                                        style={{
                                          paddingLeft: "20px",
                                          marginBottom: "24px",
                                        }}
                                      >
                                        {subsection.content.map(
                                          (item, itemIndex) => (
                                            <div
                                              key={itemIndex}
                                              style={{
                                                padding: "16px 20px",
                                                background: "#f8f9fa",
                                                borderRadius: "8px",
                                                marginBottom: "12px",
                                                fontSize: "15px",
                                                lineHeight: "1.8",
                                                color: "#34495e",
                                                borderLeft: "4px solid",
                                                borderColor:
                                                  index === 0
                                                    ? "#3498db"
                                                    : index === 1
                                                    ? "#2ecc71"
                                                    : index === 2
                                                    ? "#e74c3c"
                                                    : index === 3
                                                    ? "#9b59b6"
                                                    : "#f1c40f",
                                              }}
                                            >
                                              {item}
                                            </div>
                                          )
                                        )}
                                      </div>
                                    )}

                                    {subsection.cards && (
                                      <div
                                        style={{
                                          paddingLeft: "20px",
                                          display: "flex",
                                          flexDirection: "column",
                                          gap: "16px",
                                        }}
                                      >
                                        {subsection.cards.map((card, idx) => (
                                          <div
                                            key={idx}
                                            style={{
                                              padding: "20px",
                                              background:
                                                "linear-gradient(135deg, rgba(52, 152, 219, 0.08) 0%, rgba(46, 204, 113, 0.05) 100%)",
                                              borderRadius: "10px",
                                              border: "1px solid rgba(52, 152, 219, 0.2)",
                                              display: "flex",
                                              gap: "16px",
                                              alignItems: "flex-start",
                                            }}
                                          >
                                            <div
                                              style={{
                                                minWidth: "40px",
                                                width: "40px",
                                                height: "40px",
                                                borderRadius: "10px",
                                                background:
                                                  "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: "white",
                                                fontWeight: "bold",
                                                fontSize: "18px",
                                                flexShrink: 0,
                                              }}
                                            >
                                              {idx + 1}
                                            </div>
                                            <div style={{ flex: 1 }}>
                                              <h4
                                                style={{
                                                  fontSize: "17px",
                                                  fontWeight: "700",
                                                  color: "#2c3e50",
                                                  marginBottom: "8px",
                                                }}
                                              >
                                                {card.title}
                                              </h4>
                                              <p
                                                style={{
                                                  color: "#555",
                                                  lineHeight: "1.7",
                                                  fontSize: "14px",
                                                  margin: 0,
                                                }}
                                              >
                                                {card.content}
                                              </p>
                                            </div>
                                          </div>
                                        ))}
                                      </div>
                                    )}
                                  </motion.div>
                                );
                              }

                              // Default fallback
                              return null;
                            })}
                          </div>
                        )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>
      {/* Subsection Detail Modal */}
      <AnimatePresence>
        {selectedSubsection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 2000,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(0,0,0,0.8)",
              padding: "20px",
            }}
            onClick={closeSubsectionModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.8, y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              style={{
                backgroundColor: "white",
                borderRadius: "16px",
                maxWidth: "95vw",
                width: "100%",
                maxHeight: "90vh",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div
                style={{
                  padding: "28px 32px",
                  borderBottom: "1px solid #eee",
                  background:
                    "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                  color: "white",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h3
                    style={{
                      margin: 0,
                      fontSize: "24px",
                      fontWeight: "bold",
                    }}
                  >
                    {(() => {
                      const section = sections.find(
                        (s) => s.id === selectedSubsection.sectionId
                      );
                      return section?.subsections?.[
                        selectedSubsection.subsectionIndex
                      ]?.title;
                    })()}
                  </h3>
                  <button
                    onClick={closeSubsectionModal}
                    style={{
                      background: "rgba(255,255,255,0.2)",
                      border: "none",
                      color: "white",
                      borderRadius: "50%",
                      width: "40px",
                      height: "40px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      transition: "background 0.3s ease",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.3)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.background =
                        "rgba(255,255,255,0.2)")
                    }
                  >
                    ×
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div
                style={{
                  padding: "32px",
                  maxHeight: "calc(90vh - 120px)",
                  overflow: "auto",
                }}
              >
                {(() => {
                  const section = sections.find(
                    (s) => s.id === selectedSubsection.sectionId
                  );
                  const subsection =
                    section?.subsections?.[selectedSubsection.subsectionIndex];

                  if (!subsection) return null;

                  return (
                    <div>
                      {/* Content */}
                      {subsection.content && subsection.content.length > 0 && (
                        <div style={{ marginBottom: "32px" }}>
                          <h4
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#3498db",
                              marginBottom: "20px",
                            }}
                          >
                            📋 Nội dung chính
                          </h4>
                          {subsection.content.map((item, idx) => (
                            <div
                              key={idx}
                              style={{
                                marginBottom: "16px",
                                padding: "16px",
                                backgroundColor: "#f8f9fa",
                                borderRadius: "10px",
                                borderLeft: "4px solid #3498db",
                                fontSize: "15px",
                                lineHeight: "1.6",
                              }}
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Cards */}
                      {subsection.cards && subsection.cards.length > 0 && (
                        <div>
                          <h4
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#3498db",
                              marginBottom: "20px",
                            }}
                          >
                            🎯 Chi tiết các đặc trưng
                          </h4>
                          <div
                            style={{
                              display: "grid",
                              gridTemplateColumns:
                                "repeat(auto-fit, minmax(350px, 1fr))",
                              gap: "20px",
                            }}
                          >
                            {subsection.cards.map((card, idx) => {
                              const colors = [
                                "#667eea",
                                "#f093fb",
                                "#4facfe",
                                "#43e97b",
                                "#fa709a",
                                "#a8edea",
                                "#12100e",
                                "#fcb69f",
                              ];
                              const color = colors[idx % colors.length];

                              return (
                                <div
                                  key={idx}
                                  style={{
                                    backgroundColor: "white",
                                    border: `2px solid ${color}`,
                                    borderRadius: "12px",
                                    padding: "20px",
                                    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                                    transition: "all 0.3s ease",
                                  }}
                                >
                                  {card.image && (
                                    <div
                                      style={{
                                        width: "100%",
                                        height: "200px",
                                        marginBottom: "16px",
                                        borderRadius: "8px",
                                        overflow: "hidden",
                                        backgroundColor: "#f5f5f5",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                      }}
                                    >
                                      <img
                                        src={card.image}
                                        alt={card.title}
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          objectFit: "cover",
                                        }}
                                      />
                                    </div>
                                  )}
                                  <h5
                                    style={{
                                      fontSize: "16px",
                                      fontWeight: "bold",
                                      color: color,
                                      marginBottom: "12px",
                                    }}
                                  >
                                    {card.title}
                                  </h5>
                                  <p
                                    style={{
                                      fontSize: "14px",
                                      color: "#666",
                                      lineHeight: "1.8",
                                      margin: 0,
                                      whiteSpace: "pre-line",
                                    }}
                                  >
                                    {card.content}
                                  </p>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Timeline */}
                      {subsection.timeline &&
                        subsection.timeline.length > 0 && (
                          <div style={{ marginTop: "32px" }}>
                            <h4
                              style={{
                                fontSize: "24px",
                                fontWeight: "bold",
                                marginBottom: "32px",
                                color: "#3498db",
                                display: "flex",
                                alignItems: "center",
                                gap: "12px",
                                textAlign: "center",
                                justifyContent: "center",
                              }}
                            >
                              Phương Hướng Xây Dựng CNXH
                            </h4>

                            <div
                              style={{
                                position: "relative",
                                display: "flex",
                                flexDirection: "column",
                                gap: "48px",
                                marginLeft: "32px",
                                paddingLeft: "32px",
                              }}
                            >
                              {/* Main timeline line */}
                              <div
                                style={{
                                  position: "absolute",
                                  left: "16px",
                                  top: "24px",
                                  bottom: "24px",
                                  width: "4px",
                                  background:
                                    "linear-gradient(to bottom, #3498db 0%, #2ecc71 50%, #e74c3c 100%)",
                                  borderRadius: "2px",
                                }}
                              ></div>

                              {subsection.timeline.map((event, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -30 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.2 + idx * 0.3,
                                    duration: 0.6,
                                  }}
                                  style={{
                                    position: "relative",
                                    marginLeft: "24px",
                                  }}
                                >
                                  {/* Timeline node */}
                                  <div
                                    style={{
                                      position: "absolute",
                                      left: "-56px",
                                      top: "16px",
                                      width: "32px",
                                      height: "32px",
                                      borderRadius: "50%",
                                      background:
                                        "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      color: "white",
                                      fontWeight: "bold",
                                      fontSize: "14px",
                                      boxShadow:
                                        "0 4px 12px rgba(211, 47, 47, 0.4)",
                                      border: "4px solid white",
                                      zIndex: 2,
                                    }}
                                  >
                                    {idx + 1}
                                  </div>

                                  {/* Timeline card */}
                                  <motion.div
                                    whileHover={{
                                      scale: 1.02,
                                      boxShadow:
                                        "0 12px 30px rgba(211, 47, 47, 0.2)",
                                    }}
                                    style={{
                                      background:
                                        "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(211, 47, 47, 0.02) 100%)",
                                      borderRadius: "16px",
                                      padding: "24px",
                                      boxShadow:
                                        "0 6px 20px rgba(211, 47, 47, 0.15)",
                                      border:
                                        "2px solid rgba(211, 47, 47, 0.1)",
                                      cursor: "pointer",
                                      transition: "all 0.3s ease",
                                      backdropFilter: "blur(10px)",
                                    }}
                                  >
                                    {/* Header */}
                                    <div style={{ marginBottom: "16px" }}>
                                      <div
                                        style={{
                                          display: "inline-block",
                                          background:
                                            "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                          color: "white",
                                          padding: "6px 12px",
                                          borderRadius: "20px",
                                          fontSize: "12px",
                                          fontWeight: "bold",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        {event.year}
                                      </div>
                                      <h5
                                        style={{
                                          fontSize: "20px",
                                          fontWeight: "bold",
                                          color: "#3498db",
                                          margin: "8px 0",
                                          lineHeight: "1.3",
                                        }}
                                      >
                                        {event.title}
                                      </h5>
                                      <p
                                        style={{
                                          fontSize: "14px",
                                          color: "#666",
                                          margin: "0 0 16px 0",
                                          lineHeight: "1.5",
                                        }}
                                      >
                                        {event.description}
                                      </p>
                                    </div>

                                    {/* Sub items */}
                                    {event.subItems && (
                                      <div
                                        style={{
                                          display: "grid",
                                          gridTemplateColumns:
                                            "repeat(auto-fit, minmax(300px, 1fr))",
                                          gap: "12px",
                                          marginTop: "16px",
                                        }}
                                      >
                                        {event.subItems.map(
                                          (subItem, subIdx) => (
                                            <motion.div
                                              key={subIdx}
                                              initial={{ opacity: 0, y: 10 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{
                                                delay:
                                                  0.4 +
                                                  idx * 0.3 +
                                                  subIdx * 0.1,
                                                duration: 0.4,
                                              }}
                                              whileHover={{ scale: 1.02 }}
                                              style={{
                                                background: "white",
                                                padding: "12px 16px",
                                                borderRadius: "8px",
                                                border:
                                                  "1px solid rgba(211, 47, 47, 0.1)",
                                                boxShadow:
                                                  "0 2px 8px rgba(0,0,0,0.05)",
                                                transition: "all 0.2s ease",
                                                position: "relative",
                                                paddingLeft: "32px",
                                              }}
                                            >
                                              <span
                                                style={{
                                                  position: "absolute",
                                                  left: "12px",
                                                  top: "14px",
                                                  width: "6px",
                                                  height: "6px",
                                                  backgroundColor: "#3498db",
                                                  borderRadius: "50%",
                                                }}
                                              ></span>
                                              <span
                                                style={{
                                                  fontSize: "13px",
                                                  color: "#555",
                                                  lineHeight: "1.4",
                                                }}
                                              >
                                                {subItem}
                                              </span>
                                            </motion.div>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </motion.div>
                                </motion.div>
                              ))}
                            </div>

                            {/* 12 Nhiệm vụ Cơ bản Đại hội XII */}
                            <div
                              style={{
                                marginTop: "48px",
                                width: "100%",
                                overflowX: "auto",
                              }}
                            >
                              <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                style={{
                                  background:
                                    "linear-gradient(135deg, #3498db 0%, #2ecc71 100%)",
                                  color: "white",
                                  padding: "24px 32px",
                                  borderRadius: "16px",
                                  textAlign: "center",
                                  marginBottom: "32px",
                                  boxShadow:
                                    "0 8px 24px rgba(211, 47, 47, 0.3)",
                                }}
                              >
                                <h4
                                  style={{
                                    margin: 0,
                                    fontSize: "28px",
                                    fontWeight: "bold",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "12px",
                                  }}
                                >
                                  12 Nhiệm vụ Cơ bản (Đại hội XII)
                                </h4>
                                <p
                                  style={{
                                    margin: "12px 0 0 0",
                                    fontSize: "16px",
                                    opacity: 0.9,
                                    fontStyle: "italic",
                                  }}
                                >
                                  Đảng ta yêu cầu không được phiến diện, cực
                                  đoan, duy ý chí trong giải quyết các mối quan
                                  hệ này
                                </p>
                              </motion.div>

                              <div
                                style={{
                                  display: "flex",
                                  flexWrap: "nowrap",
                                  gap: "12px",
                                  width: "100%",
                                  minWidth: "1000px",
                                  overflowX: "auto",
                                }}
                              >
                                {/* Cột 1: Nhiệm vụ 1-3 */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1, duration: 0.6 }}
                                  style={{
                                    background:
                                      "linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(139, 195, 74, 0.05) 100%)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    border: "2px solid rgba(76, 175, 80, 0.2)",
                                    height: "fit-content",
                                  }}
                                >
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "bold",
                                      color: "#4caf50",
                                      marginBottom: "16px",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    Nhiệm vụ 1-3
                                  </h5>

                                  {[
                                    {
                                      num: 1,
                                      title:
                                        "Phát triển kinh tế nhanh, bền vững",
                                      desc: "Giữ vững ổn định vĩ mô, đổi mới mô hình tăng trưởng, cơ cấu lại nền kinh tế. Đẩy mạnh CNH-HĐH.",
                                    },
                                    {
                                      num: 2,
                                      title: "Hoàn thiện thể chế kinh tế",
                                      desc: "Tiếp tục phát triển kinh tế thị trường định hướng xã hội chủ nghĩa; nâng cao hiệu lực, hiệu quả trong quản lý.",
                                    },
                                    {
                                      num: 3,
                                      title: "Phát triển nguồn nhân lực",
                                      desc: "Đổi mới căn bản, toàn diện giáo dục, đào tạo và đẩy mạnh ứng dụng khoa học công nghệ.",
                                    },
                                  ].map((item, idx) => (
                                    <div
                                      key={idx}
                                      style={{
                                        marginBottom: idx < 2 ? "16px" : 0,
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            background: "#4caf50",
                                            color: "white",
                                            padding: "4px 8px",
                                            borderRadius: "12px",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {item.num}
                                        </div>
                                        <strong
                                          style={{
                                            fontSize: "14px",
                                            color: "#4caf50",
                                          }}
                                        >
                                          {item.title}:
                                        </strong>
                                      </div>
                                      <p
                                        style={{
                                          fontSize: "13px",
                                          color: "#555",
                                          lineHeight: "1.6",
                                          margin: 0,
                                          paddingLeft: "32px",
                                        }}
                                      >
                                        {item.desc}
                                      </p>
                                    </div>
                                  ))}
                                </motion.div>

                                {/* Cột 2: Nhiệm vụ 4-6 */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1.1, duration: 0.6 }}
                                  style={{
                                    background:
                                      "linear-gradient(135deg, rgba(33, 150, 243, 0.1) 0%, rgba(103, 58, 183, 0.05) 100%)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    border: "2px solid rgba(33, 150, 243, 0.2)",
                                    height: "fit-content",
                                  }}
                                >
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "bold",
                                      color: "#2196f3",
                                      marginBottom: "16px",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    Nhiệm vụ 4-6
                                  </h5>

                                  {[
                                    {
                                      num: 4,
                                      title: "Xây dựng văn hóa",
                                      desc: "Phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc, con người Việt Nam phát triển toàn diện.",
                                    },
                                    {
                                      num: 5,
                                      title: "Quản lý xã hội và an sinh",
                                      desc: "Đảm bảo an sinh xã hội, nâng cao phúc lợi xã hội; thực hiện tốt chính sách với người có công.",
                                    },
                                    {
                                      num: 6,
                                      title: "Môi trường và khí hậu",
                                      desc: "Khai thác, sử dụng hiệu quả tài nguyên thiên nhiên; bảo vệ môi trường; ứng phó với biến đổi khí hậu.",
                                    },
                                  ].map((item, idx) => (
                                    <div
                                      key={idx}
                                      style={{
                                        marginBottom: idx < 2 ? "16px" : 0,
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            background: "#2196f3",
                                            color: "white",
                                            padding: "4px 8px",
                                            borderRadius: "12px",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {item.num}
                                        </div>
                                        <strong
                                          style={{
                                            fontSize: "14px",
                                            color: "#2196f3",
                                          }}
                                        >
                                          {item.title}:
                                        </strong>
                                      </div>
                                      <p
                                        style={{
                                          fontSize: "13px",
                                          color: "#555",
                                          lineHeight: "1.6",
                                          margin: 0,
                                          paddingLeft: "32px",
                                        }}
                                      >
                                        {item.desc}
                                      </p>
                                    </div>
                                  ))}
                                </motion.div>

                                {/* Cột 3: Nhiệm vụ 7-9 */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1.2, duration: 0.6 }}
                                  style={{
                                    background:
                                      "linear-gradient(135deg, rgba(255, 152, 0, 0.1) 0%, rgba(255, 193, 7, 0.05) 100%)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    border: "2px solid rgba(255, 152, 0, 0.2)",
                                    height: "fit-content",
                                  }}
                                >
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "bold",
                                      color: "#ff9800",
                                      marginBottom: "16px",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    Nhiệm vụ 7-9
                                  </h5>

                                  {[
                                    {
                                      num: 7,
                                      title: "Bảo vệ Tổ quốc",
                                      desc: "Kiên quyết đấu tranh bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ của Tổ quốc.",
                                    },
                                    {
                                      num: 8,
                                      title: "Đường lối đối ngoại",
                                      desc: "Độc lập, tự chủ, đa phương hóa, đa dạng hóa, chủ động và tích cực hội nhập quốc tế.",
                                    },
                                    {
                                      num: 9,
                                      title: "Phát huy dân chủ",
                                      desc: "Hoàn thiện dân chủ xã hội chủ nghĩa và quyền làm chủ của nhân dân; củng cố đại đoàn kết dân tộc.",
                                    },
                                  ].map((item, idx) => (
                                    <div
                                      key={idx}
                                      style={{
                                        marginBottom: idx < 2 ? "16px" : 0,
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            background: "#ff9800",
                                            color: "white",
                                            padding: "4px 8px",
                                            borderRadius: "12px",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {item.num}
                                        </div>
                                        <strong
                                          style={{
                                            fontSize: "14px",
                                            color: "#ff9800",
                                          }}
                                        >
                                          {item.title}:
                                        </strong>
                                      </div>
                                      <p
                                        style={{
                                          fontSize: "13px",
                                          color: "#555",
                                          lineHeight: "1.6",
                                          margin: 0,
                                          paddingLeft: "32px",
                                        }}
                                      >
                                        {item.desc}
                                      </p>
                                    </div>
                                  ))}
                                </motion.div>

                                {/* Cột 4: Nhiệm vụ 10-12 */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 1.3, duration: 0.6 }}
                                  style={{
                                    background:
                                      "linear-gradient(135deg, rgba(156, 39, 176, 0.1) 0%, rgba(233, 30, 99, 0.05) 100%)",
                                    borderRadius: "12px",
                                    padding: "20px",
                                    border: "2px solid rgba(156, 39, 176, 0.2)",
                                    height: "fit-content",
                                  }}
                                >
                                  <h5
                                    style={{
                                      fontSize: "18px",
                                      fontWeight: "bold",
                                      color: "#9c27b0",
                                      marginBottom: "16px",
                                      display: "flex",
                                      alignItems: "center",
                                      gap: "8px",
                                    }}
                                  >
                                    Nhiệm vụ 10-12
                                  </h5>

                                  {[
                                    {
                                      num: 10,
                                      title: "Nhà nước pháp quyền",
                                      desc: "Hoàn thiện Nhà nước pháp quyền xã hội chủ nghĩa, xây dựng bộ máy nhà nước tinh gọn, trong sạch, vững mạnh.",
                                    },
                                    {
                                      num: 11,
                                      title: "Xây dựng Đảng",
                                      desc: "Xây dựng Đảng trong sạch, vững mạnh, nâng cao năng lực lãnh đạo, tăng cường bản chất giai cấp công nhân.",
                                    },
                                    {
                                      num: 12,
                                      title: "Xử lý các quan hệ lớn",
                                      desc: "Quán triệt xử lý tốt 9 mối quan hệ lớn trong quá trình xây dựng chủ nghĩa xã hội.",
                                    },
                                  ].map((item, idx) => (
                                    <div
                                      key={idx}
                                      style={{
                                        marginBottom: idx < 2 ? "16px" : 0,
                                      }}
                                    >
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                          gap: "8px",
                                          marginBottom: "8px",
                                        }}
                                      >
                                        <div
                                          style={{
                                            background: "#9c27b0",
                                            color: "white",
                                            padding: "4px 8px",
                                            borderRadius: "12px",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                          }}
                                        >
                                          {item.num}
                                        </div>
                                        <strong
                                          style={{
                                            fontSize: "14px",
                                            color: "#9c27b0",
                                          }}
                                        >
                                          {item.title}:
                                        </strong>
                                      </div>
                                      <p
                                        style={{
                                          fontSize: "13px",
                                          color: "#555",
                                          lineHeight: "1.6",
                                          margin: 0,
                                          paddingLeft: "32px",
                                        }}
                                      >
                                        {item.desc}
                                      </p>
                                    </div>
                                  ))}
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        )}
                    </div>
                  );
                })()}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentSection;
