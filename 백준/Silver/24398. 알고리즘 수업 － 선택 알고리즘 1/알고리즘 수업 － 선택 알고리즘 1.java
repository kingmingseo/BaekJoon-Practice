import java.util.ArrayList;
import java.util.Scanner;

public class Main {
	static int num1;
	static int num2;
	static int count;
	
	
	static int Partition(int A[],int p,int r,int c) {
		int x =A[r];
		int temp1 = 0;
		int temp2 = 0;
		int i=p-1;
			
		for (int j=p; j<=r-1; j++) {
			if(A[j]<=x) {
				++count;
				temp1=A[++i];
				temp2=A[j];
				A[i]=A[j];
				A[j]=temp1;
				}
			if(count==c) {
				num1=temp1;
				num2=temp2;
			}
		
			
			
				
		}
		if(i+1!=r) {
		
			++count;
			temp1=A[i+1];
			temp2=A[r];
			A[i+1]=A[r];
			A[r]=temp1;
		
		}
		if(count==c) {
			num1=temp1;
			num2=temp2;
		}
		
		
	
		return i+1;
		
		
	}
	static int Select(int A[], int p, int r, int q, int c) {
		if(p==r) return A[p];
		
		int t=Partition(A,p,r,c);
		
		int k=t-p+1;
		
		if(q<k) return Select(A,p,t-1,q,c);
		
		else if (q==k) return A[t];
		
		else return Select(A,t+1,r,q-k,c);
	}
		
	public static void main(String[] args) {
		Scanner scanner= new Scanner(System.in);
		
		int a=scanner.nextInt();
		int b=scanner.nextInt();
		int c=scanner.nextInt();
		
		
		int[] A=new int[a];
		
		for (int i=0; i<a; i++) {
			A[i]=scanner.nextInt();
		}
		
		Select(A,0,a-1,b,c);
		
		if(count<c) System.out.print(-1);
		else System.out.println(num2+" "+num1);
			
	}
}



