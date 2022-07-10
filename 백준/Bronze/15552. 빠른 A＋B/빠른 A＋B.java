import java.util.StringTokenizer;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

public class Main {
	public static void main(String[] args) throws IOException {

		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); 
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out)); 
		
		int num=Integer.parseInt(br.readLine());
				
		
		int[] arr= new int[num];
		
		for(int i=0; i<num; i++) {
			StringTokenizer st = new StringTokenizer(br.readLine());
			int N = Integer.parseInt(st.nextToken());
			int M = Integer.parseInt(st.nextToken());
			arr[i]=N+M;
			
			}
		
		for(int i=0; i<num; i++) {
			bw.write(String.valueOf(arr[i]));
			bw.newLine();
		}
				
		
		br.close();
		bw.close();
		
		
			

	}
}