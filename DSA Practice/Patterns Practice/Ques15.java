import java.util.*;
public class Ques15 {
  public static void main (String [] args){
    Scanner scn = new Scanner (System.in);
    int n = scn.nextInt();
    
    int sp = n/2;
    int st = 1;
    int val = 1;
    for(int i = 1; i <= n; i++){
      
      for(int j = 1; j <= sp; j++){
        System.out.print("\t");
      }

      int hz = val;
      for(int j = 1; j <= st; j++){
        System.out.print(hz + "\t");

        if(j <= st/2){
          hz++;
        }
        else{
        hz--;
        }

      }
      

      System.out.println();
      if(i <= n/2){
        sp--;
        st += 2;
        val++;
      }
      else{
        sp++;
        st -= 2;
        val--;
      }

     
    }
  }
}