import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.StringTokenizer;


public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 
	
	

		
			int a=Integer.parseInt(br.readLine());
			int b=a;
			int count = 0;
			
			if(a<10) {
				a=a*10; 
				count+=1;}
			
			
			
			while(true) {
				
				
				
				if(a==b&&count!=0) break;
				int temp1=(b%10)+(b/10);   
				
				int temp2=(b%10)*10; 
				
				int temp3=temp1%10;
				
				int temp4=temp3+temp2;
				
				
				b=temp4;
				
				count+=1;
				
				
			}
			
			System.out.println(count);
			
			
		
		
		
		
		bw.flush();
		bw.close();
		br.close();
			
		
		
	}
}
