import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
     private productService: ProductService,
     private toastrService: ToastrService,
     private authService: AuthService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm() {
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required],
      categoryId: ["", Validators.required]
    });
  }

  add(){
    if(this.checkValidation()){
      let productModel = Object.assign({},this.productAddForm.value);
      this.productService.add(productModel).subscribe((response)=>{
        console.log(response);
        this.toastrService.success(productModel.productName + " Başarılı bir şekilde eklendi");
      }, errorResponse=>{
        this.toastrService.error(errorResponse.error,"Attention");
        console.log(errorResponse)
      });
      
    }else{
      this.toastrService.error("Girilen bilgiler boş bırakılamaz","Attention");
    }

  }

  checkValidation(){
    if(this.productAddForm.valid){
      return true;
    }
    return false;
  }

}
