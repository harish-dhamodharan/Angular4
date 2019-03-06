import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tree-view-json',
  templateUrl: './tree-view-json.component.html',
  styleUrls: ['./tree-view-json.component.css']
})
export class TreeViewJsonComponent implements OnInit {
  formattedJson;
  currentSelection: string;
  inputJson = [
    {
    'url': 'http://localhost:4200/b2b/admin/transfer',
    'id': null,
    'dependency': [
      {
        'assetType': 'partner',
        'selected': false,
        'assets': [
          {
            'id': '0age0100cqvh73bu0000008j',
            'name': 'default'
          },
          {
            'id': '0age0100cqvh6vuu00000073',
            'name': 'Partner_2251459e4ed1f4c5f486659614700aa0 ( ORG_23_DATE: 29/10/2018-02:35:33PM )'
          }
        ]
      },
      {
        'assetType': 'documenttype',
        'selected': false,
        'assets': [
          {
            'id': 'WMEANC1-----ENVELOPE----',
            'name': 'EANCOM Envelope'
          },
          {
            'id': 'WMEANC1-----GROUP-------',
            'name': 'EANCOM Group'
          },
          {
            'id': 'EDIINT------------------',
            'name': 'EDIINT'
          }
        ]
      }
    ],
    'name': null,
    'assetType': 'processingrule',
    'inclusion_flag': false
    }
];
  arr = [];
  constructor() { }

  ngOnInit() {
    if (this.inputJson !== undefined && this.inputJson !== null) {
      if (this.inputJson[0].dependency.length > 0 ) {
        this.formattedJson = this.inputJson[0].dependency;  
      }
    }

  }

  openTree1(currentAsset) {
    // this.arr.push(currentAssetType);
    // if (currentAssetType !== undefined) {
    //   if (this.currentSelection === currentAssetType) {
    //     this.currentSelection = undefined;
    //   } else {
    //     this.currentSelection = currentAssetType;
    //   }
    // }
    currentAsset.selected = !currentAsset.selected;
  }
}
