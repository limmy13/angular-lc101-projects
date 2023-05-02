import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fave-links',
  templateUrl: './fave-links.component.html',
  styleUrls: ['./fave-links.component.css']
})
export class FaveLinksComponent implements OnInit {

  constructor() { }
  link1 = "https://www.google.com/search?q=plott+hound+mix&tbm=isch&ved=2ahUKEwix1sL63Nf-AhU3wMkDHYIAC_4Q2-cCegQIABAA&oq=plott+hound+mix&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoHCAAQigUQQ1CiBVi9B2C5CWgAcAB4AIABUIgBsgKSAQE1mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=cZRRZPHZHbeAp84PgoGs8A8&bih=685&biw=1369";
  link2 = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";

  ngOnInit() {
  }

}
