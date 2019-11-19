export const configuration = {
  header: {
    buttonlink: '/Home',
    buttonlogo: '../assets/images/logo.png'
  },
  product: {
    buttonlink: '/Product',
    furniture: [
      {
        id: 1,
        image: 'p-1.jpg',
        image_thumb: 't-1.jpg',
        name: 'Fibre Chair',
        description: 'Nội dung mô tả sản phẩm 1',
        price: '400.000 đ',
        discount: '450.000đ',
        km: '-20%'
      },
      {
        id: 2,
        image: 'p-2.jpg',
        image_thumb: 't-2.jpg',
        name: 'Touchwood Chair',
        description: 'Mô tả sản phẩm 2',
        price: '850.000 đ',
        discount: '1.000.000đ',
        km: '-15%'
      },
      {
        id: 3,
        image: 'p-3.jpg',
        image_thumb: 't-3.jpg',
        name: 'Classic Wardrobe',
        description: 'Mô tả sản phẩm 3',
        price: '1.450,000 đ',
        discount: '2.000.000đ',
        km: '-10%'
      },
      {
        id: 4,
        image: 't-4.jpg',
        image_thumb: 't-4.jpg',
        name: 'Touchwood Chair',
        description: 'Mô tả sản phẩm 4',
        price: '450.000 đ',
        discount: '600.000đ',
        km: '-15%'
      },
      {
        id: 5,
        image: 't-5.jpg',
        image_thumb: 't-5.jpg',
        name: 'Touchwood Chair Sofa',
        description: 'Mô tả sản phẩm 5',
        price: '200.000 đ',
        discount: '400.000đ',
        km: '-50%'
      },
    ]
  },
  slider: {
    tagline: 'Ghế sofa và ghế tay vịn',
    description: 'Mang lại cho bạn cảm giác thoải mái khi sử dụng.',
    button: 'Tìm hiểu thêm'
  },
  service: {
    tag: 'Sứ mệnh của chúng tôi',
    tagline: 'Xây dựng ngôi nhà hoàn mỹ cho các bạn',
    imagelink: '../assets/images/services/services.jpg',
    // tslint:disable-next-line:max-line-length
    description: 'Với kinh nghiệm nhiều năm trong lĩnh vực thiết kế, tư vấn, thi công nội thất nhà đất. Chúng tôi tự hào mang đến cho bạn sự phục vụ tuyệt vời nhất.',
    button: 'Đọc thêm'
  },
  team : {
    tagline: 'ĐỘI CỦA CHÚNG TÔI',
    // tslint:disable-next-line:max-line-length
    description: 'Mang đến cho bạn sự phục vụ tốt nhất.',
    member : [
      { image: '#', name: 'Hồng Phúc', position: 'FOUNDER', linkfb: ''},
      { image: '#', name: 'Quang Minh', position: 'CONSULTANT', linkfb: ''},
      { image: '#', name: 'Thu Hà', position: 'MARKETING', linkfb: ''},
      { image: '#', name: 'Hương Giang', position: 'MATERIAL', linkfb: ''},
      { image: '#', name: 'Lê Hằng', position: 'BUSINESS', linkfb: ''},
    ]
  },
  blog: {
    tagline: 'Blog của chúng tôi',
    description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.',
   feature: [
     {image: 'b-1.jpg', title: 'Tình yêu và biển cả', by: 'Hồng Phúc', date: '25 JULY, 2018', i: 'admin1.jpg'},
     {image: 'b-2.jpg', title: 'Tuổi trẻ đáng giá bao nhiêu ?', by: 'Thu Hà', date: '12 NOVEMBER, 2019', i: 'admin2.jpg' },
     {image: 'b-3.jpg', title: 'Không gian sống lý tưởng', by: 'Quang Minh', date: '24 May, 2019', i: 'admin3.jpg'}
   ]
  }
};
