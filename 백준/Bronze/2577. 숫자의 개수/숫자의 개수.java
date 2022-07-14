import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.Arrays;
import java.util.StringTokenizer;


public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 
		
		int a=Integer.parseInt(br.readLine());
		int b=Integer.parseInt(br.readLine());
		int c=Integer.parseInt(br.readLine());
		
		int temp=a*b*c;
		
		String k=String.valueOf(temp);
		
		int arr[]=new int[10];
		
		
		
		for(int i=0; i<10; i++) {
			for(int j=0; j<k.length(); j++) {
				if (k.charAt(j)==(Character.forDigit(i,10))) {
					arr[i]+=1;
				}
			}
			
		}
		
		for(int i=0; i<10; i++) {
			System.out.println(arr[i]);
		}
		
		
		
		bw.flush();
		bw.close();
		br.close();
			
		
		
	}

}




