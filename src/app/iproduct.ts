export interface IProduct {
  id: number;
  idsp?: string;
  tensp: string;
  giasp: number;
  solanxem: number;
  hot: number;
  mota: string;
  hinh: string;
  ngay: string;
  idLoai: number;
}

export interface ITypeProducts {
  id: number;
  tenLoai: string;
  soSP: number;
}
