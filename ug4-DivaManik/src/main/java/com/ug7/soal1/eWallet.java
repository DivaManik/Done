package com.ug7.soal1;

public class eWallet {
    protected User user;
    protected int saldo;


    public eWallet(User user) {
        this.user = user;
    }

    public String topup(int jumlah) {
        return null;
    }

    public void transfer(eWallet eWallet,int jumlah){
        if (this.saldo < jumlah)
            return;
        this.saldo -= jumlah;
        eWallet.saldo+=jumlah;
    }
    public void withdraw(int jumlah){
        if (this.saldo >= jumlah)
        this.saldo-=jumlah;
    }
    public void getInfo(){
        System.out.println("Nama : " +user.getNama());
        System.out.println("Email : " + user.getEmail());
        System.out.println("Saldo : "+this.saldo);
    }
//    buat Getuser
    public User getUser(){
        return user;
    }

    public int getSaldo() {return  saldo;}
}
