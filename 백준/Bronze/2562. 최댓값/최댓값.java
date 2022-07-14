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
		
		int[] arr=new int[9];
		int temp = 1;
	
		for (int i=0; i<9; i++) {
			arr[i]=Integer.parseInt(br.readLine());
		}
		
		int max=arr[0];
		
		for(int i=0; i<9; i++){
			if (max<arr[i]) {
				max=arr[i];
				temp=i+1;
				
			}
		}
		
		System.out.println(max);
		System.out.println(temp);
			
		
		bw.flush();
		bw.close();
		br.close();
			
		
		
	}
}

