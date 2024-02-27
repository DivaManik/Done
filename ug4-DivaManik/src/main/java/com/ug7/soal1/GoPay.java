package com.ug7.soal1;

public class GoPay extends eWallet{
    private static final int feeTopup = 1000;
    private static final int feeTransfer = 500;
    private static final int feeWithdraw = 2500;

    public GoPay(User user){
        super(user);
    };

    @Override
    public String topup(int jumlah){
        if (jumlah >0 && this.user.getUang() > jumlah) {
            int total = jumlah - feeTopup;
            this.saldo+= total;
            this.user.topup(jumlah);
            return "Top up berhasil saldo anda : "+ this.saldo;
        }else {
            return "top up  gaga jumlah top up harus lbh besar dri 0";
        }
    }

    public void transfer(eWallet eWallet,int jumlah){
        if (jumlah> 0 && this.saldo>=jumlah){
            int total = jumlah+feeTransfer;
            this.saldo -= total;
            eWallet.saldo+=jumlah;
        }else {
            System.out.println("Transfer gagal");
        }
    }

   @Override
   public void withdraw(int jumlah) {
       if (jumlah > this.saldo){
           System.out.println("Saldo anda tidak mencukupi");
       }
       super.withdraw(jumlah);
       this.saldo -= feeWithdraw
       ;
   }

    public void getInfo(){
        System.out.println("Nama : " + this.user.getNama());
        System.out.println("Email : " + this.user.getEmail());
        System.out.println("Email Verivikasi : " + this.user.isEmailConfirmed());
        System.out.println("Sald : " + this.saldo);
    }

    public void pay(int juml) {
        super.withdraw(juml);
    }
}
