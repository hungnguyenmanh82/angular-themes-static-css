import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  /**
   * để tránh trong thời gian download new css theme sẽ bị mất theme
   * ta dùng ajax download css ở background trc (css có cached).
   * nếu download thành công thì tiến hành đổi theme (nếu fail thì vẫn dùng theme cũ)
   */
  setTheme(cssFile: string) {
    /**
     * code DOM ko cần add thêm bất kỳ thư viện nào
     * <HTMLLinkElement>: là ép kiểu trên TypeScript => javaScript ko cần
     * Nếu ko cast thì ".href" sẽ bão lỗi ko tìm thấy properties
     * <a> => HTMLLinkElement
     * <input> => HTMLInputElement
     */
    (<HTMLLinkElement>document.getElementById('stylesheet')).href = cssFile;
  }
}
