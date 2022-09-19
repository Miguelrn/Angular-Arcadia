import { Component, OnInit } from '@angular/core';
import { SearchItem } from 'src/app/shared/models/SearchItem';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {

  searchList: SearchItem[];
  search: String;
  constructor() { 
    this.search = '';
    this.searchList = [
      {
        name: "Titulo del nodo 1",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempor magna scelerisque placerat consequat. Nullam tellus arcu, convallis at mauris a, cursus viverra enim. Duis et ullamcorper diam, in ultrices massa. Aliquam nec tortor et orci imperdiet interdum tempor in diam. Donec ullamcorper orci in metus mattis lacinia sed id ex. Vivamus ultrices aliquet tellus quis blandit. Aliquam fermentum nibh ac lacus finibus, eget facilisis neque scelerisque.`,
        origin: "Repository 1",
        type: "test",
      },
      {
        name: "Titulo del nodo 2",
        description: `Mauris at facilisis velit, vitae tincidunt urna. Ut at porttitor magna, accumsan imperdiet libero. Praesent ultrices non sapien quis egestas. Aliquam sit amet dui quis leo aliquet pellentesque ut eu diam. Vivamus at est eget arcu suscipit tempor. Aenean at viverra erat. Suspendisse potenti. Vivamus elementum sem turpis, ac dapibus dui luctus sed. Phasellus eu semper ipsum.`,
        origin: "Repository 2",
        type: "test",
      },
      {
        name: "Titulo del nodo 3",
        description: `Quisque dapibus felis nec dignissim suscipit. Vestibulum orci sem, auctor vel mi id, ullamcorper ultrices ex. In hac habitasse platea dictumst. Donec ac erat in nunc varius tincidunt at eu justo. Quisque in nisi nec odio imperdiet vestibulum quis vel nunc. Ut neque leo, feugiat ac fermentum id, interdum vitae ex. Suspendisse ut aliquam dolor, tristique varius nulla. Aliquam erat volutpat. Sed venenatis est a sapien tincidunt, at convallis ante accumsan. Praesent accumsan felis ligula, vel viverra orci fermentum nec.`,
        origin: "Repository 3",
        type: "test",
      },
      {
        name: "Titulo del nodo 4",
        description: `Donec dapibus velit vel mi aliquet sodales. Aliquam ligula orci, aliquam vel aliquet vitae, suscipit hendrerit massa. Nullam ac magna a eros blandit aliquet. Nulla facilisi. Ut at felis tortor. Morbi convallis at leo eget blandit. Sed non finibus nunc. Ut dictum justo luctus enim porta iaculis. Ut quis purus diam. Phasellus odio nisi, mattis ut dolor et, accumsan condimentum ante. Aenean in congue magna, in varius felis. Sed aliquet, neque non suscipit fermentum, mi erat rutrum lacus, sed ultricies felis diam quis enim. Sed pulvinar cursus enim, sed semper leo mollis sit amet.`,
        origin: "Repository 2",
        type: "test",
      },
      {
        name: "Titulo del nodo 5",
        description: `Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc ultricies, quam ac pulvinar suscipit, est leo molestie nunc, id venenatis elit leo convallis magna. Etiam porta, ex nec ultricies sagittis, urna odio semper diam, nec accumsan sem tortor quis dolor. Suspendisse sollicitudin odio vel ante volutpat, eu molestie mi condimentum. Donec non nibh consequat metus tempor hendrerit vitae id sapien. Praesent commodo urna ut sem fringilla vulputate at vel tellus. Cras euismod velit id mauris congue pretium. Praesent vel elit eget nibh viverra mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam hendrerit leo vel sapien hendrerit, non imperdiet ex aliquet. Curabitur vitae neque non turpis facilisis rutrum. Sed id posuere enim.`,
        origin: "Repository 1",
        type: "test",
      }

    ]
  }

  ngOnInit(): void {
  }

}
